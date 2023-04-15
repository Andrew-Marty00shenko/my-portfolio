import type { FC } from 'react';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from 'context/auth.context';

import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const Router: FC = () => {
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    } else {
      navigate('/');
    }
  }, [isAuth]);

  return isAuth ? <PrivateRoutes /> : <PublicRoutes />;
};

export default Router;
