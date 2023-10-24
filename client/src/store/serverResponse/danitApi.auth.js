import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as API from '../../configs/API';

export const danitApiAuth = createApi({
  reducerPath: 'danitApiAuth',
  baseQuery: fetchBaseQuery({
    baseUrl: API.API_URL,
  }),
  endpoints: (build) => ({
    login: build.mutation({
      query: () => API.API_GET_ALL_PRODUCTS,
    }),
  }),
});

export const { useGetAllProductsQuery } = danitApiAuth;
