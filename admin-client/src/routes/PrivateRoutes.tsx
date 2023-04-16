import type { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from 'pages/Dashboard';
import Header from 'components/Header';

const PrivateRoutes: FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default PrivateRoutes;
