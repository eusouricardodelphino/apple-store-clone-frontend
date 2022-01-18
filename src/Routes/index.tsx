import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import New from '../pages/New';
import Edit from '../pages/Edit';
import Show from '../pages/Show';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/new" element={<New />} />
    <Route path="/edit/:productId" element={<Edit />} />
    <Route path="/show/:productId" element={<Show />} />
  </Routes>
);

export default AppRoutes;
