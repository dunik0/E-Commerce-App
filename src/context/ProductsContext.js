import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { host, port } from '../APIConfig.json';
import CartContext from './CartContext';

const ProductsContext = React.createContext({
  products: [],
  categories: [],
  filters: { colors: [], materials: [], priceMin: Number, priceMax: Number },
  activeFilters: {
    colors: [],
    materials: [],
    priceMin: Number,
    priceMax: Number,
    category: String,
    search: String,
    sortBy: String,
  },
  changeSorting: () => {},
  toggleFilter: () => {},
  isLoading: Boolean,
});

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({});
  const [activeFilters, setActiveFilters] = useState({
    colors: [],
    materials: [],
    priceMin: 0,
    priceMax: 0,
    search: '',
    category: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState('title asc');
  const { likedItems } = useContext(CartContext);
  const changeSorting = (value) => {
    setIsLoading(true);
    setSortBy(value);
  };

  const toggleFilter = (value, category) => {
    console.log(value, category);
    switch (category) {
      case 'colors':
      case 'materials':
        const newActiveFilters = [...activeFilters[category]];
        newActiveFilters.includes(value)
          ? newActiveFilters.splice(newActiveFilters.indexOf(value), 1)
          : newActiveFilters.push(value);
        setActiveFilters((prevState) => ({
          ...prevState,
          [category]: newActiveFilters,
        }));
        break;
      case 'category':
        setIsLoading(true);
        setActiveFilters((prevState) => ({
          ...prevState,
          colors: [],
          materials: [],
          search: '',
        }));
      case 'search':
        setActiveFilters((prevState) => ({
          ...prevState,
          [category]: value,
        }));
        break;
      case 'price':
        setActiveFilters((prevState) => ({
          ...prevState,
          priceMin: value[0],
          priceMax: value[1],
        }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `http://${host}:${port}/getAllProducts?${new URLSearchParams({
            sortBy,
          })}`,
        );
        const products = await res.json();
        setAllProducts(products);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [sortBy]);

  useEffect(() => {
    const categories = allProducts.map((item) => item.category);
    categories.unshift('all', 'bestsellers');

    const prices = allProducts.map((item) => item.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    const uniqueCategories = [...new Set(categories)];
    setCategories(uniqueCategories);
    setFilters((prevState) => ({ ...prevState, priceMin: min, priceMax: max }));
    setActiveFilters((prevState) => ({
      ...prevState,
      priceMin: min,
      priceMax: max,
    }));
  }, [allProducts]);

  useEffect(() => {
    const colors = products.map((item) =>
      item.color.includes(',') ? item.color.split(',') : item.color,
    );
    const materials = products.map((item) =>
      item.materialfilter?.includes(',')
        ? item.materialfilter.split(',')
        : item.materialfilter,
    );
    const uniqueColors = [...new Set(colors.flat())];
    const uniqueMaterials = [...new Set(materials.flat())];
    setFilters((prevState) => ({
      ...prevState,
      colors: uniqueColors,
      materials: uniqueMaterials,
    }));
  }, [isLoading]);

  useEffect(() => {
    const filteredProducts = allProducts.filter((item) => {
      const {
        id,
        title,
        color,
        materialfilter,
        material,
        fabriccontent,
        price,
      } = item;
      const { colors, materials, search, priceMin, priceMax, category } =
        activeFilters;
      if (category === 'bestsellers') return item.bestseller;
      else if (category === 'liked') return likedItems.includes(id);
      else
        return (
          (colors[0] ? colors.includes(color) : true) &&
          (materials[0]
            ? materialfilter
                .split(',')
                .some((material) => materials.includes(material))
            : true) &&
          (search[0]
            ? search
                .split(' ')
                .every(
                  (word) =>
                    title.toLowerCase().includes(word) ||
                    color?.toLowerCase().includes(word) ||
                    material?.toLowerCase().includes(word) ||
                    fabriccontent?.toLowerCase().includes(word),
                )
            : true) &&
          (category[0] ? category === item.category : true) &&
          price >= priceMin &&
          price <= priceMax
        );
    });
    setProducts(filteredProducts);
    if (filteredProducts[0]) setIsLoading(false);
  }, [activeFilters, allProducts]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        categories,
        filters,
        activeFilters,
        toggleFilter,
        isLoading,
        sortBy,
        changeSorting,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

ProductsContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ProductsContext;
