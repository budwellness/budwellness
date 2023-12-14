import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as API from '../../configs/API';
import { API_EDIT_USER } from '../../configs/API';

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
      transformResponse: (response) => response.token,
    }),
    registrationUser: build.mutation({
      query: ({ ...userData }) => ({
        url: API.API_REGISTRATION_USER,
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: userData,
      }),
    }),
    editUser: build.mutation({
      query: ({ userData, token }) => ({
        url: API.API_EDIT_USER,
        method: 'PUT',
        headers: {
          Authorization: token,
          'Content-type': 'application/json',
        },
        body: JSON.stringify(userData),
      }),
    }),
    changePassword: build.mutation({
      query: ({ userData, token }) => ({
        url: API.API_CHANGEPASSWORD_USER,
        method: 'PUT',
        headers: {
          Authorization: token,
          'Content-type': 'application/json',
        },
        body: JSON.stringify(userData),
      }),
    }),
  }),
});

export const {
  useLoginUserMutation, useRegistrationUserMutation, useEditUserMutation, useChangePasswordMutation,
} = danitApiAuth;
