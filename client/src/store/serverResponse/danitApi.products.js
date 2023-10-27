import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as API from '../../configs/API';

export const danitApiProducts = createApi({
  reducerPath: 'danitApiProducts',
  baseQuery: fetchBaseQuery({
    baseUrl: API.API_URL,
  }),
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => API.API_GET_ALL_PRODUCTS,
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

export const { useGetAllProductsQuery } = danitApiProducts;
