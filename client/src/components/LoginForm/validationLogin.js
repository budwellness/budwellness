import * as yup from 'yup';

const validationSchema = yup.object({
  loginOrEmail: yup.string().required('Enter your email'),
  password: yup.string().required('Enter your password'),
});

export default validationSchema;
