import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as API from '../../configs/API';

export const danitApiAuth = createApi({
  reducerPath: 'danitApiAuth',
  baseQuery: fetchBaseQuery({
    baseUrl: API.API_URL,
  }),
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: ({ ...credentials }) => ({
        url: API.API_LOGIN,
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: credentials,
      }),
      // transformResponse: (response) => response.token,
    }),
  }),
});

export const { useLoginUserMutation } = danitApiAuth;
