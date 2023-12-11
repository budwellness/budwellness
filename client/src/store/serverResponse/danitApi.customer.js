import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as API from '../../configs/API';

export const danitApiCustomer = createApi({
  reducerPath: 'danitApiCustomer',
  baseQuery: fetchBaseQuery({
    baseUrl: API.API_URL,
  }),
  endpoints: (build) => ({
    getCustomerData: build.query({
      query: (token) => ({
        url: API.API_GET_CUSTOMER,
        method: 'GET',
        headers: {
          Authorization: token,
        },
      }),
    }),
  }),
});

export const { useLazyGetCustomerDataQuery } = danitApiCustomer;
