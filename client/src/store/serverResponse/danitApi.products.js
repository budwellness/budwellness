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
    addProduct: build.mutation({
      query: ({ token, product }) => ({
        url: API.API_ADD_PRODUCT,
        method: 'POST',
        headers: {
          Authorization: token,
          'Content-type': 'application/json',
        },
        body: JSON.stringify(product),
      }),
    }),
    getSingleProduct: build.mutation({
      query: (itemNo) => ({
        url: `${API.API_GET_ONE_PRODUCT}/${itemNo}`,
        method: 'GET',
      }),
    }),
    getProduct: build.query({
      query: (itemNo) => `${API.API_GET_ONE_PRODUCT}/${itemNo}`,
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
        body: {
          query: searchPhrases,
        },
      }),
    }),
    getFilteredProducts: build.query({
      query: (queryString) => `${API.API_GET_FILTERED_PRODUCTS}${queryString}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useLazyGetAllProductsQuery,
  useGetSingleProductMutation,
  useSearchForProductsMutation,
  useAddProductMutation,
  useGetFilteredProductsQuery,
  useLazyGetFilteredProductsQuery,
  useGetProductQuery,
} = danitApiProducts;
