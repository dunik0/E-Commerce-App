import React, { useContext } from 'react';
import ProductsContext from '../context/ProductsContext';
import ProductList from '../components/ProductList/ProductList';
import DefaultLayout from '../layouts/DefaultLayout';

const FrontPage = () => {
  const { products } = useContext(ProductsContext);

  return (
    <DefaultLayout>
      <ProductList products={products} />
    </DefaultLayout>
  );
};

export default FrontPage;
