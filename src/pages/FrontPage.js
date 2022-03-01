import React, { useContext, useEffect } from 'react';
import ProductsContext from '../context/ProductsContext';
import ProductList from '../components/ProductList/ProductList';
import DefaultLayout from '../layouts/DefaultLayout';
import ProductsPlaceholder from '../components/ProductList/ProductsPlaceholder';

const FrontPage = () => {
  const { products, toggleFilter, isLoading } = useContext(ProductsContext);
  useEffect(() => {
    toggleFilter('', 'category');
  }, []);
  return (
    <DefaultLayout>
      {isLoading ? (
        <ProductsPlaceholder />
      ) : (
        <ProductList products={products} />
      )}
    </DefaultLayout>
  );
};

export default FrontPage;
