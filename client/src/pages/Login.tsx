import type { FC } from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import useAuth from 'hooks/useAuth';
import { loginValidationSchema } from 'utils/validation/loginValidation';
import type { ILoginForm } from 'types/user.type';

import InputField from 'components/Common/InputField';
import Button from 'components/Common/Button';

import logo from 'assets/images/icons/logo.png';

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginValidationSchema),
  });

  const { login } = useAuth();

  const onSubmit = (data: ILoginForm): void => {
    login.mutate({ email: data.email, password: data.password });
  };

  return (
    <div className="container mx-auto">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <Link to="/">
              <img className="mx-auto h-20 w-auto cursor-pointer" src={logo} alt="Your Company" />
            </Link>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link
                className="font-medium underline text-indigo-600 hover:text-indigo-500"
                to="/register"
              >
                register
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <InputField
                  type="email"
                  name="email"
                  htmlFor="email"
                  label="Your email"
                  placeholder="Your email"
                  register={register}
                  className={
                    errors.email
                      ? 'relative block w-full appearance-none rounded-none rounded-t-md border border-red-300 px-3 py-2 text-red-900 placeholder-red-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm'
                      : 'relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  }
                />
              </div>
              <div>
                <InputField
                  type="password"
                  name="password"
                  htmlFor="password"
                  label="Password"
                  placeholder="Password"
                  register={register}
                  className={
                    errors.password
                      ? 'relative block w-full appearance-none rounded-none rounded-b-md border border-red-300 px-3 py-2 text-red-900 placeholder-red-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm'
                      : 'relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  }
                />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                icon={
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                }
                text="Login"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
