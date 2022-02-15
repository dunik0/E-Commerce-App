import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { host, port } from '../APIConfig.json';

const ProductsContext = React.createContext({
  products: [],
  categories: [],
});

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(`http://${host}:${port}/getAllProducts`);
      const products = await res.json();
      const categories = products.map((item) => item.category);
      const uniqueCategories = [...new Set(categories)];
      uniqueCategories.unshift('All', 'Bestsellers', 'Sale');
      setCategories(uniqueCategories);
      setProducts(products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    try {
      fetchData();
    } catch {
      console.log(`Error fetching http://${host}:${port}/getAllProducts`);
    }
  }, []);

  return (
    <ProductsContext.Provider value={{ products, categories }}>
      {children}
    </ProductsContext.Provider>
  );
};

ProductsContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ProductsContext;
