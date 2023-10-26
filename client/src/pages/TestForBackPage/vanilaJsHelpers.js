import { loginUser, uploadSingleProduct } from '../../helpers/sendRequest';
import {
  //   mockProductApiExample,
  //   mockProductBud,
  productsJSON,
} from './mockedTestData';

export const loginHandler = async () => {
  console.log('loginHandler');
  const loginOrEmail = 'customer@gmail.com';
  const password = '1111111';
  const { token } = await loginUser(loginOrEmail, password);
  if (token) {
    localStorage.setItem('token', token);
  }
};

export const uploadHandler = async () => {
  productsJSON.forEach(async (product) => await uploadSingleProduct(product));
  // console.log('loginHandler');
  // const response = await uploadSingleProduct(mockProductBud);
};

export const checkHandler = () => {
  const token = localStorage.getItem('token');
  console.log('loginHandler token: ', token);
};

export const checkToken = (token) => {
  console.log(token);
};

// MOCKED TEST DATA:
