import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminPage from '../../pages/AdminPage';
import CategoryPage from '../../pages/CategoryPage';
import FrontPage from '../../pages/FrontPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<FrontPage />} />
        <Route path={'/admin'} element={<AdminPage />} />
        <Route path={'/category/:categoryName'} element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
