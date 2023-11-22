import * as yup from 'yup';

export const validationSchema = yup.object({
  loginOrEmail: yup.string().required('Enter your email'),
  password: yup.string().required('Enter your password'),
});
