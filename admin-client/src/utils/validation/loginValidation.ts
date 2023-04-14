import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email is not valid'),
  password: Yup.string().required('Password is required'),
});
