import type { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from 'pages/Login';
import Register from 'pages/Register';

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Router;
