import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import New from '../pages/New';
import Edit from '../pages/Edit';
import ImageUpload from '../pages/ImageUpload';
import Show from '../pages/Show';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/new" element={<New />} />
    <Route path="/products/:productId/edit" element={<Edit />} />
    <Route path="/products/:productId/image" element={<ImageUpload />} />
    <Route path="/products/:productId" element={<Show />} />
  </Routes>
);

export default AppRoutes;
