import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const url = process.env.REACT_APP_URL;
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: url
    }),
    endpoints: builder => ({
        getFeatured: builder.query({
            query: () => '/trending'
        }),
        getArticleFromSource: builder.query({
            query: (source) => `/articles?source=${source}`
        }),
        getSources: builder.query({
            query: () => `/sources`
        })
    })
})
export const { 
    useGetFeaturedQuery,
    useGetArticleFromSourceQuery,
    useGetSourcesQuery,
} = apiSlice;