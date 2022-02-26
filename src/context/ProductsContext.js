import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { host, port } from '../APIConfig.json';

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
  },
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
    category: '',
    search: '',
  });
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch(`http://${host}:${port}/getAllProducts`);
      const products = await res.json();
      const categories = products.map((item) => item.category);
      categories.unshift('all', 'bestsellers');
      const colors = products.map((item) =>
        item.color.includes(',') ? item.color.split(',') : item.color,
      );
      const materials = products.map((item) =>
        item.materialfilter?.includes(',')
          ? item.materialfilter.split(',')
          : item.materialfilter,
      );
      const prices = products.map((item) => item.price);
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      const uniqueCategories = [...new Set(categories)];
      const uniqueColors = [...new Set(colors.flat())];
      const uniqueMaterials = [...new Set(materials.flat())];
      setCategories(uniqueCategories);
      setProducts(products);
      setAllProducts(products);
      setFilters({
        colors: uniqueColors,
        materials: uniqueMaterials,
        priceMin: min,
        priceMax: max,
      });
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleFilter = (value, category) => {
    console.log(value, category);
    switch (category) {
      case 'colors' || 'materials':
        const newActiveFilters = [...activeFilters[category]];
        newActiveFilters.includes(value)
          ? newActiveFilters.splice(newActiveFilters.indexOf(value), 1)
          : newActiveFilters.push(value);
        setActiveFilters((prevState) => ({
          ...prevState,
          [category]: newActiveFilters,
        }));
        break;
      case 'search':
        setActiveFilters((prevState) => ({
          ...prevState,
          [category]: value,
        }));
        break;
    }
  };
  console.log(activeFilters);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filteredProducts = allProducts.filter((item) => {
      // console.log(item);
      // console.log(
      //   activeFilters.colors[0]
      //     ? activeFilters.colors.includes(item.color)
      //     : true && activeFilters.materials[0]
      //     ? activeFilters.materials.includes(item.materialfilter.split(','))
      //     : true,
      // );
      return activeFilters.colors[0]
        ? activeFilters.colors.includes(item.color)
        : true && activeFilters.materials[0]
        ? activeFilters.materials.includes(...item.materialfilter.split(','))
        : true && activeFilters.search.length > 0
        ? activeFilters.search
            .split(' ')
            .every(
              (word) =>
                item.title.toLowerCase().includes(word) ||
                item.color?.toLowerCase().includes(word) ||
                item.material?.toLowerCase().includes(word),
            )
        : true;
    });
    console.log(filteredProducts);
    setProducts(filteredProducts);
  }, [activeFilters]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        categories,
        filters,
        activeFilters,
        toggleFilter,
        isLoading,
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
