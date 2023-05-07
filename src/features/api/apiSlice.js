import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { nanoid } from "@reduxjs/toolkit";

const url = process.env.REACT_APP_URL;
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: url
    }),
    endpoints: builder => ({
        getFeatured: builder.query({
            query: () => '/trending',
            transformResponse: (response) => {
                const articles = response.articles;
                return articles.map(article => ({ ...article, id: nanoid() }))
            }
        }),
        getArticleFromSource: builder.query({
            query: (source) => `/articles?source=${source}`,
            transformResponse: (response) => {
                const articles = response.articles;
                return articles.map(article => ({ ...article, id: nanoid() }))
            }
        }),
        getSources: builder.query({
            query: () => `/sources`,
            transformResponse: (response) => {
                return response.sources;
            }
        }),
        getSearchResults: builder.query({
            query: (searchTerm) => `/search?query=${searchTerm}`,
            transformResponse: (response) => {
                const articles = response.articles;
                return articles.map(article => ({ ...article, id: nanoid() }))
            }
        })
    })
})
export const {
    useGetFeaturedQuery,
    useGetArticleFromSourceQuery,
    useGetSourcesQuery,
    useGetSearchResultsQuery
} = apiSlice;