import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import * as API from '../../configs/API';

export const danitApiAuth = createApi({
    reducerPath: 'danitApiAuth',
    baseQuery: fetchBaseQuery({
        baseUrl: API.API_URL,
    }),
    endpoints: (build) => ({
        loginUser: build.mutation({
            query: ({...credentials}) => ({
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
            query: ({...userData}) => ({
                url: API.API_REGISTRATION_USER,
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: userData,
            }),

        }),
    }),
});

export const {useLoginUserMutation, useRegistrationUserMutation} = danitApiAuth;

