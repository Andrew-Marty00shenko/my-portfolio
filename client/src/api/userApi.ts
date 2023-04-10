import axios from './axios';

import type { ILoginForm, IRegisterForm, IToken } from 'types/user.type';

export default {
  register: async ({ name, email, password }: IRegisterForm) => {
    const response = await axios.post<IToken>('/user/registration', {
      name,
      email,
      password,
    });

    return response;
  },
  login: async ({ email, password }: ILoginForm) => {
    const response = await axios.post<IToken>('/user/login', { email, password });

    return response;
  },
};
