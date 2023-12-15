import { object, string } from 'yup';
import 'yup-phone-lite';

const validationSchema = object({
  firstName: string()
    .required('First name is required')
    .min(2, 'The minimum number of letters must be 2')
    .max(25, 'The maximum number of letters must be 25'),
  lastName: string()
    .required('Last name is required')
    .min(2, 'The minimum number of letters must be 2')
    .max(25, 'The maximum number of letters must be 25'),
  phone: string()
    .min(13, 'The minimum number of symbol must be 13')
    .phone(
      'UA',
      'Please enter a valid phone number for the territory of Ukraine'
    )
    .required('A phone number is required'),
  email: string().required('E-mail is required').email('Invalid E-mail format'),
  deliveryAddress: string().required('Delivery address is required'),
});

export default validationSchema;
