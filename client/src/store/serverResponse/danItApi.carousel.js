/* eslint-disable */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as API from '../../configs/API';

export const danitApiCarousel = createApi({
  reducerPath: 'danitApiCarousel',
  baseQuery: fetchBaseQuery({
    baseUrl: API.API_URL,
  }),
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: ({ ...credentials }) => ({
        url: API.API_GET_SLIDES,
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: credentials,
      }),
      transformResponse: (response) => response.token,
    }),
  }),
});

export const { useCarouselMutation } = danitApiCarousel;
