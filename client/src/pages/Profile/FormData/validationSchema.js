import * as yup from 'yup';

const validationSchema = yup.object().shape({
    firstName: yup
        .string()
        .min(2, 'The name is too short')
        .max(25, 'The name is too long')
        .required('This field is required')
        .matches(/^([^0-9]*)$/gm, 'Only letters'),
    lastName: yup
        .string()
        .min(2, 'The last name is too short')
        .max(25, 'The last name is too long')
        .required('This field is required')
        .matches(/^([^0-9]*)$/gm, 'Only letters'),
    login: yup
        .string()
        .min(2, 'The user name is too short')
        .max(25, 'The user name is too long')
        .required('This field is required'),
    email: yup.string().email('Invalid e-mail format'),
    // password: yup
    //   .string()
    //   .min(8, 'Password must be at least 8 characters')
    //   .required('This field is required'),
    // newPassword: yup
    //   .string()
    //   .min(8, 'Password must be at least 8 characters')
    //   .required('This field is required'),
    phone: yup
        .string()
        .matches(/^\+(?:[0-9] ?){11,12}[0-9]$/, 'Invalid phone number')
        .required('This field is required'),
    age: yup
        .number()
        .integer('Integer only')
        .min(16, 'You are not 16 yet')
        .max(100, 'Enter the correct age')
        .required('This field is required'),
    city: yup
        .string()
        .min(2, 'City is too short')
        .max(25, 'City is too long')
        .required('This field is required')
        .matches(/^([^0-9]*)$/gm, 'Should contain only letters'),
    street: yup
        .string()
        .min(2, 'Street is too short')
        .max(25, 'Street is too long')
        .required('This field is required'),
});

export default validationSchema;
