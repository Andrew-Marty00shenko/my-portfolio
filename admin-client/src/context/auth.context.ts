import { createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';

interface IAuthContext {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<IAuthContext>({
  isAuth: false,
  setIsAuth: () => {},
});
