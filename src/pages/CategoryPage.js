import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProductList from '../components/ProductList/ProductList';
import ProductsPlaceholder from '../components/ProductList/ProductsPlaceholder';
import ProductsContext from '../context/ProductsContext';
import DefaultLayout from '../layouts/DefaultLayout';

function CategoryPage() {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  if (categoryName === 'all') navigate('/');

  const [loading, setLoading] = useState(true);
  const { products, toggleFilter, isLoading } = useContext(ProductsContext);

  useEffect(() => {
    toggleFilter(categoryName, 'category');
    setLoading(false);
  }, [categoryName]);

  return (
    <DefaultLayout>
      <Title>{categoryName.toUpperCase()}</Title>
      {!loading && !isLoading ? (
        <ProductList products={products} />
      ) : (
        <ProductsPlaceholder />
      )}
    </DefaultLayout>
  );
}

const Title = styled.h2``;

export default CategoryPage;
