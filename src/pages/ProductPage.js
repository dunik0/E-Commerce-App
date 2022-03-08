import React from 'react';
import { useLocation } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';

function ProductPage() {
  const location = useLocation();
  const { title } = location.state.data;
  return <DefaultLayout>{title}</DefaultLayout>;
}

export default ProductPage;
