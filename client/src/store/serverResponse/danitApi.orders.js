import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as API from '../../configs/API';

export const danitApiOrders = createApi({
  reducerPath: 'danitApiOrders',
  baseQuery: fetchBaseQuery({
    baseUrl: API.API_URL,
  }),
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: ({ token, ...patch }) => ({
        url: API.API_CREATE_ORDER,
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

export const { useCreateOrderMutation } = danitApiOrders;
