import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound';
import ProductListing from '../pages/ProductListing/ProductListing';
import ProductDetail from '../pages/ProductDetail/ProductDetail';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductListing />} />
      <Route path="product-detail/:id" element={<ProductDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;