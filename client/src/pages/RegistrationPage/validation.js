import * as yup from 'yup';

const validationSchema = yup.object({
    email: yup
        .string()
        .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Invalid email format. Must contain @ and a valid domain.')
        .required('The field is required'),
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
    // address: yup
    //   .string()
    //   .min(10, 'Address too short')
    //   .required('The field is required'),
    phone: yup
        .string()
        .min(6, 'Incomplete number entered')
        .max(10, 'The number is too long')
        .matches(/^\d{0,9}$/, 'Only numbers')
        .required('The field is required'),
});

export default validationSchema;
