import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as API from '../../configs/API';

export const danitApiComments = createApi({
  reducerPath: 'danitApiComments',
  baseQuery: fetchBaseQuery({
    baseUrl: API.API_URL,
  }),
  endpoints: (build) => ({
    addComment: build.mutation({
      query: ({ token, newComment }) => ({
        url: API.API_ADD_COMMENT,
        method: 'POST',
        headers: {
          Authorization: token,
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newComment),
      }),
    }),
    updateComment: build.mutation({
      query: ({ productId, token }) => ({
        url: `${API.API_UPDATE_COMMENT}${productId}`,
        method: 'PUT',
        headers: {
          Authorization: token,
          'Content-type': 'application/json',
        },
        body: JSON.stringify(productId),
      }),
    }),
    removeComment: build.mutation({
      query: ({ productId, token }) => ({
        url: `${API.API_REMOVE_COMMENT}${productId}`,
        method: 'DELETE',
        headers: {
          Authorization: token,
        },
      }),
    }),
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
    getCommentsOfCustomer: build.query({
      query: ({ customerId, token }) => ({
        url: `${API.API_GET_COMMENTS_OF_CUSTOMER}${customerId}`,
        method: 'GET',
        headers: {
          Authorization: token,
          'Content-type': 'application/json',
        },
      }),
    }),
    getCommentsOfProduct: build.query({
      query: ({ productId, token }) => ({
        url: `${API.API_GET_COMMENTS_OF_PRODUCT}${productId}`,
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
  useAddCommentMutation,
  useUpdateCommentMutation,
  useRemoveCommentMutation,
  useGetAllCommentsQuery,
  useGetCommentsOfCustomerQuery,
  useGetCommentsOfProductQuery,
} = danitApiComments;
