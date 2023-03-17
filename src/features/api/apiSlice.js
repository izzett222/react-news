import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const key = process.env.REACT_APP_KEY;
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://newsapi.org/v2"
    }),
    endpoints: builder => ({
        getFeatured: builder.query({
            query: () => `/top-headlines?country=us&pageSize=10&apiKey=${key}`
        }),
        getArticleFromSource: builder.query({
            query: (source) => `/everything?sources=${source}&pageSize=20&apiKey=${key}`
        }),
        getSources: builder.query({
            query: () => `/top-headlines/sources?country=us&pageSize=15&apiKey=${key}`
        })
    })
})
export const { 
    useGetFeaturedQuery,
    useGetArticleFromSourceQuery,
    useGetSourcesQuery,
} = apiSlice;