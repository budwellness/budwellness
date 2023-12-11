import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as API from '../../configs/API';

export const danitApiOrders = createApi({
  reducerPath: 'danitApiOrders',
  baseQuery: fetchBaseQuery({
    baseUrl: API.API_URL,
  }),
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: ({ token, newOrder }) => ({
        url: API.API_CREATE_ORDER,
        method: 'POST',
        headers: {
          Authorization: token,
          'Content-type': 'application/json',
        },
        body: newOrder,
      }),
    }),
    getAllOrders: build.query({
      query: (token) => ({
        url: API.API_GET_ORDERS,
        method: 'GET',
        headers: {
          Authorization: token,
        },
      }),
    }),
  }),
});

export const { useCreateOrderMutation, useLazyGetAllOrdersQuery } =
  danitApiOrders;
