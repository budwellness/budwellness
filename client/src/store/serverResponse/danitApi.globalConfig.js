import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as API from '../../configs/API';

export const danitApiGlobalConfig = createApi({
  reducerPath: 'danitApiGlobalConfig',
  baseQuery: fetchBaseQuery({
    baseUrl: API.API_URL,
  }),
  endpoints: (build) => ({
    addGlobalConfig: build.mutation({
      query: ({ token, newConfig }) => ({
        url: API.API_ADD_GLOBAL_CONFIG,
        method: 'POST',
        headers: {
          Authorization: token,
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newConfig),
      }),
    }),
  }),
});

export const { useAddGlobalConfigMutation } = danitApiGlobalConfig;
