import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as API from '../../configs/API';

export const danitApiProducts = createApi({
  reducerPath: 'danitApiProducts',
  baseQuery: fetchBaseQuery({
    baseUrl: API.API_URL,
  }),
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => API.API_GET_ALL_PRODUCTS,
    }),
    // addProduct: build.mutation({
    //   query: ({ token, ...patch }) => ({
    //     url: API.API_ADD_PRODUCT,
    //     method: 'POST',
    //     headers: {
    //       Authorization: token,
    //       'Content-type': 'application/json',
    //     },
    //     body: patch,
    //   }),
    // }),
    getSingleProduct: build.mutation({
      query: (itemNo) => ({
        url: `${API.API_GET_ONE_PRODUCT}/${itemNo}`,
        method: 'GET',
      }),
    }),
    searchForProducts: build.mutation({
      /* should be JS object like:
            const searchPhrases = {
              query: "men clothing pants"
            };
      */
      query: (searchPhrases) => ({
        url: API.API_SEARCH_PRODUCTS,
        method: 'POST',
        body: searchPhrases,
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useLazyGetAllProductsQuery,
  useGetSingleProductMutation,
  useSearchForProductsMutation,
} = danitApiProducts;
