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
  }),
});

export const { useGetAllProductsQuery, useLazyGetAllProductsQuery } = danitApiProducts;
