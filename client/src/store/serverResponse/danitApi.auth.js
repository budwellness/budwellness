import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as API from '../../configs/API';

export const danitApiAuth = createApi({
  reducerPath: 'danitApiAuth',
  baseQuery: fetchBaseQuery({
    baseUrl: API.API_URL,
  }),
  endpoints: (build) => ({
    login: build.mutation({
      query: ({ ...credentials }) => ({
        url: API.API_LOGIN,
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: credentials,
      }),
    }),
    addProduct: build.mutation({
      query: ({ token, ...patch }) => ({
        url: API.API_ADD_PRODUCT,
        method: 'POST',
        headers: {
          Authorization: token,
          'Content-type': 'application/json',
        },
        body: patch,
      }),
    }),
  }),
});

export const { useLoginMutation } = danitApiAuth;
