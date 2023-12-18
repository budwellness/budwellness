import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as API from '../../configs/API';

export const danitApiCart = createApi({
  reducerPath: 'danitApiCart',
  baseQuery: fetchBaseQuery({
    baseUrl: API.API_URL,
  }),
  endpoints: (build) => ({
    getCart: build.query({
      query: (token) => ({
        url: API.API_GET_CART,
        method: 'GET',
        headers: {
          Authorization: token,
        },
      }),
    }),
    createCart: build.mutation({
      query: ({ newCart, token }) => ({
        url: API.API_CREATE_CART,
        method: 'POST',
        headers: {
          Authorization: token,
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newCart),
      }),
    }),
    addToCart: build.mutation({
      query: ({ productId, token }) => ({
        url: `${API.API_ADD_TO_CART}${productId}`,
        method: 'PUT',
        headers: {
          Authorization: token,
        },
      }),
    }),
    removeFromCart: build.mutation({
      query: ({ productId, token }) => ({
        url: `${API.API_REMOVE_FROM_CART}${productId}`,
        method: 'DELETE',
        headers: {
          Authorization: token,
        },
      }),
    }),
    decreaseCartQuantity: build.mutation({
      query: ({ productId, token }) => ({
        url: `${API.API_DEACREASE_PRODUCT_QUANTITY}${productId}`,
        method: 'DELETE',
        headers: {
          Authorization: token,
        },
      }),
    }),
    updateCart: build.mutation({
      query: ({ products, token }) => ({
        url: `${API.API_UPDATE_CART}`,
        method: 'PUT',
        headers: {
          Authorization: token,
          'Content-type': 'application/json',
        },
        body: JSON.stringify(products),
      }),
    }),
  }),
});

export const {
  useLazyGetCartQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useDecreaseCartQuantityMutation,
  useUpdateCartMutation,
  useCreateCartMutation,
} = danitApiCart;
