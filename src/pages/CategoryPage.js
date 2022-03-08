import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProductList from '../components/ProductList/ProductList';
import ProductsPlaceholder from '../components/ProductList/ProductsPlaceholder';
import ProductsContext from '../context/ProductsContext';
import DefaultLayout from '../layouts/DefaultLayout';

function CategoryPage() {
  const { categoryName } = useParams();
  const [loading, setLoading] = useState(true);
  const { products, toggleFilter, isLoading } = useContext(ProductsContext);

  useEffect(() => {
    if (categoryName) toggleFilter(categoryName, 'category');
    else toggleFilter('', 'category');
    setLoading(false);
  }, [categoryName]);

  return (
    <DefaultLayout>
      {categoryName && <Title>{categoryName}</Title>}
      {!loading && !isLoading ? (
        <ProductList products={products} />
      ) : (
        <ProductsPlaceholder />
      )}
    </DefaultLayout>
  );
}

const Title = styled.h1`
  font-family: Poppins;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  margin: 0;
  padding: 10px 25px;
  box-shadow: 0 1px rgb(0 0 0 / 5%);
`;

export default CategoryPage;
