import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as API from '../../configs/API';

export const danitApiComments = createApi({
  reducerPath: 'danitApiComments',
  baseQuery: fetchBaseQuery({
    baseUrl: API.API_URL,
  }),
  endpoints: (build) => ({
    getAllComments: build.query({
      query: (token) => ({
        url: API.API_GET_ALL_COMMENTS,
        method: 'GET',
        headers: {
          Authorization: token,
          'Content-type': 'application/json',
        },
      }),
    }),

  }),
});

export const {
  useGetAllCommentsQuery,
} = danitApiComments;
