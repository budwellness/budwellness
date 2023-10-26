/* eslint-disable */
import { API_GET_SLIDES, API_URL } from '../configs/API';

export const loginUser = async (loginOrEmail, password) => {
  const userIdentity = {
    loginOrEmail,
    password,
  };

  console.log('JSON.string...', JSON.stringify(userIdentity));

  const response = await fetch(`${API_URL}/customers/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userIdentity),
  });

  return await response.json();
};

export const uploadSingleProduct = async (product) => {
  const token = localStorage.getItem('token');

  const headers = {
    Authorization: token,
    'Content-type': 'application/json',
  };

  const response = await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers,
    body: JSON.stringify(product),
  });

  const result = await response.json();
  console.log(result);
};

export const getSlides = async () => {
  const response = await fetch(`${API_GET_SLIDES}`, {
    method: 'GET',
  });
  return await response.json();
};
