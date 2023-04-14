import * as Yup from 'yup';

export const registrationValidationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('Email is required').email('Email is not valid'),
  password: Yup.string()
    .required('Password is required')
    .min(6, '6 characters are min')
    .max(40, '40 characters are max'),
});
