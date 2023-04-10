import type { FC } from 'react';
import type { UseFormRegister } from 'react-hook-form';

interface InputFieldProps {
  type: string;
  htmlFor?: string;
  label?: string;
  placeholder?: string;
  name: string;
  className: string;
  register: UseFormRegister<any>;
}

const InputField: FC<InputFieldProps> = ({
  type,
  placeholder,
  htmlFor,
  label,
  name,
  className,
  register,
}) => {
  return (
    <>
      <label htmlFor={htmlFor} className="sr-only">
        {label}
      </label>
      <input type={type} className={className} placeholder={placeholder} {...register(name)} />
    </>
  );
};

export default InputField;
