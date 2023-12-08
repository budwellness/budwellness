import { object, string } from 'yup';
import 'yup-phone-lite';

const validationSchema = object({
  fullName: string()
    .required('Full name is required')
    .min(2, 'The minimum number of letters must be 2'),
  mobilePhone: string()
    .phone(
      'UA',
      'Please enter a valid phone number for the territory of Ukraine'
    )
    .required('A phone number is required'),
  email: string().required('E-mail is required').email('Invalid E-mail format'),
  deliveryAddress: string().required('Delivery address is required'),
});

export default validationSchema;
