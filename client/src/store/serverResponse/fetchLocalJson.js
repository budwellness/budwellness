import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const localJsonApi = createApi({
    reducerPath: 'localJsonApi',
    baseQuery: fetchBaseQuery({
        baseUrl: ''
    }),
    endpoints: build => ({
        getAllProducts: build.query({
            query: () => 'products.json',
        })
    })
})

export const {useGetAllProductsQuery} = localJsonApi
