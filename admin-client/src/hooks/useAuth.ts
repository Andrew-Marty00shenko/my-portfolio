import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import userApi from 'api/userApi';

import type { ILoginForm, IRegisterForm } from 'types/user.type';
import type { IError } from 'types/error.type';
import type { AxiosError } from 'axios';

const useAuth = () => {
  const login = useMutation(
    async ({ email, password }: ILoginForm) => {
      return await userApi.login({ email, password });
    },
    {
      onSuccess: ({ data }) => {
        const { token } = data;

        if (token !== null) {
          localStorage.setItem('token', token);
          toast.success('Welcome');
        }
      },
      onError(err: AxiosError) {
        const { message }: IError | any = err.response?.data;
        toast.error(message);
        localStorage.removeItem('token');
      },
    }
  );

  const registration = useMutation(
    async ({ name, email, password }: IRegisterForm) => {
      return await userApi.register({ name, email, password });
    },
    {
      onSuccess: ({ data }) => {
        const { token } = data;

        if (token !== null) {
          localStorage.setItem('token', token);
          toast.success('User has been successfully registered!');
        }
      },
      onError(err: AxiosError) {
        const { message }: IError | any = err.response?.data;
        toast.error(message);
        localStorage.removeItem('token');
      },
    }
  );

  return { login, registration };
};

export default useAuth;
