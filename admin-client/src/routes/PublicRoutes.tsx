import type { FC } from 'react';
import { Routes, Route } from 'react-router';

import Login from 'pages/Login';
import Register from 'pages/Register';

const PublicRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default PublicRoutes;
