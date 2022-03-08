import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminPage from '../../pages/AdminPage';
import CategoryPage from '../../pages/CategoryPage';
import ProductPage from '../../pages/ProductPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<CategoryPage />} />
        <Route path={'/category/:categoryName'} element={<CategoryPage />} />
        <Route path={'/admin'} element={<AdminPage />} />
        <Route path={'/product/:id'} element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
