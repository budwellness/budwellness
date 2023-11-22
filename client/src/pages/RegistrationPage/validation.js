import * as yup from 'yup';

export const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Name too short')
    .matches(/[a-zA-ZА-Яа-я]/, 'The field contains only letters')
    .required('The field is required'),
  lastName: yup
    .string()
    .min(2, 'Name too short')
    .matches(/[a-zA-ZА-Яа-я]/, 'The field contains only letters')
    .required('The field is required'),
  age: yup
    .number()
    .min(18, 'You are under 18 years old')
    .max(150, 'Incorrect age')
    .required('The field is required'),
  address: yup
    .string()
    .min(10, 'Address too short')
    .required('The field is required'),
  phone: yup
    .string()
    .matches(/^\d{1,10}$/, 'The field is only numbers')
    .min(6, 'Incomplete number entered')
    .max(10, 'The number is too long')
    .required('The field is required'),
});
