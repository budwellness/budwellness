import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup
    .string()
    .required('First Name is required.')
    .matches(/^[a-zA-Zа-яА-Я]+$/, 'Allowed characters')
    .min(2, 'First Name must be between 2 and 25 characters')
    .max(25, 'First Name must be between 2 and 25 characters'),
  lastName: Yup
    .string()
    .required('Last Name is required.')
    .matches(/^[a-zA-Zа-яА-Я]+$/, 'Allowed characters')
    .min(2, 'Last Name must be between 2 and 25 characters')
    .max(25, 'Last Name must be between 2 and 25 characters'),
  login: Yup
    .string()
    .required('Login is required.')
    .matches(/^[a-zA-Z0-9]+$/, 'Allowed characters')
    .min(3, 'Login must be between 3 and 10 characters')
    .max(10, 'Login must be between 3 and 10 characters'),
  email: Yup
    .string()
    .required('Email is required.')
    .email('That is not a valid email.'),
  password: Yup
    .string()
    .min(7, 'Password must be at least 7 characters')
    .required('Password is required'),
  repeatPassword: Yup
    .string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  telephone: Yup
    .string()
    .matches(/^\+380\d{3}\d{2}\d{2}\d{2}$/, 'That is not a valid phone number.'),
  age: Yup
    .number()
    .min(18, 'Age must be 18 or older')
    .required('Age is required'),
});

export default validationSchema;
