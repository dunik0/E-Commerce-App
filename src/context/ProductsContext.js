import React, { useEffect, useState } from 'react';
import { host, port } from '../APIConfig.json';

const ProductsContext = React.createContext({
  products: [],
  categories: [],
});

export const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://${host}:${port}/getAllProducts`);
      const products = await res.json();
      const categories = products.map((item) => item.category);
      const uniqueCategories = [...new Set(categories)];
      uniqueCategories.unshift('All', 'Bestsellers', 'Sale');
      setCategories(uniqueCategories);
      setProducts(products);
    };
    fetchData();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, categories }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
