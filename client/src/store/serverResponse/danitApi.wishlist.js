import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as API from '../../configs/API';

export const danitApiWishlist = createApi({
  reducerPath: 'danitApiWishlist',
  baseQuery: fetchBaseQuery({
    baseUrl: API.API_URL,
  }),
  endpoints: (build) => ({
    getWishlist: build.query({
      query: (token) => ({
        url: API.API_GET_WISHLIST,
        method: 'GET',
        headers: {
          Authorization: token,
          'Content-type': 'application/json',
        },
      }),
    }),
    createWishlist: build.mutation({
      query: ({ token, ...patch }) => ({
        url: API.API_CREATE_WISHLIST,
        method: 'POST',
        headers: {
          Authorization: token,
          'Content-type': 'application/json',
        },
        body: patch,
      }),
    }),
    addProductToWishlist: build.mutation({
      query: ({ id: productId, token, ...patch }) => ({
        url: `${API.API_ADD_TO_WISHLIST}${productId}`,
        method: 'POST',
        headers: {
          Authorization: token,
          'Content-type': 'application/json',
        },
        body: patch,
      }),
    }),
    removeFromWishlist: build.mutation({
      query: () => {},
    }),
  }),
});

export const { useLazyGetWishlistQuery, useCreateWishlistMutation } =
  danitApiWishlist;
