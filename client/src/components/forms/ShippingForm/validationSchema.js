import { object, string, number } from 'yup';

const validationSchema = object({
  country: string()
    .required('Country is required')
    .min(3, 'The minimum number of letters must be 3'),
  city: string().required('City is required'),
  zip: number()
    .required('ZIP is required')
    .positive('ZIP should be positive')
    .integer('ZIP should be integer'),
});

export default validationSchema;
