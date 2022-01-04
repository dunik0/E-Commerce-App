import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminPage from '../../pages/AdminPage';
import FrontPage from '../../pages/FrontPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<FrontPage />} />
        <Route path={'/admin'} element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
