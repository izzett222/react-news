import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { nanoid } from "@reduxjs/toolkit";
import type { Article, Response, Source } from "./types";

const url = process.env.REACT_APP_URL;
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: url
    }),
    endpoints: builder => ({
        getFeatured: builder.query({
            query: () => '/trending',
            transformResponse: (response:Response) => {
                const articles = response.articles;
                return articles.map(article => ({ ...article, id: nanoid() }))
            }
        }),
        getArticleFromSource: builder.query({
            query: (source) => `/articles?source=${source}`,
            transformResponse: (response:{ articles: Article[]}) => {
                const articles = response.articles;
                return articles.map(article => ({ ...article, id: nanoid() }))
            }
        }),
        getSources: builder.query({
            query: () => `/sources`,
            transformResponse: (response: { sources: Source[]}) => {
                return response.sources;
            }
        }),
        getSearchResults: builder.query({
            query: (searchTerm:string) => `/search?query=${searchTerm}`,
            transformResponse: (response:Response) => {
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