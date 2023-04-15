import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { AuthContext } from 'context/auth.context';

import Router from 'routes/Router';

const App: FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    setIsAuth(!!localStorage.getItem('token'));
  }, [localStorage.getItem('token')]);

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        <Router />
        <ToastContainer />
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

export default App;
