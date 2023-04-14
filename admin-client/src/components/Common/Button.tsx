import type { FC, ReactElement } from 'react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  icon?: ReactElement;
  text: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ type, icon, text, disabled }) => {
  return (
    <button
      type={type}
      className={
        !disabled
          ? 'group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          : 'group relative flex w-full justify-center rounded-md border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-white cursor-default'
      }
      disabled={disabled}
    >
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        {!disabled ? icon : null}
      </span>
      {text}
    </button>
  );
};

export default Button;
