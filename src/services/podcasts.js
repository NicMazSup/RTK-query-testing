// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const podcastApi = createApi({
    reducerPath: 'podcastApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://podcast-api.netlify.app/' }),
    endpoints: (builder) => ({
        getPodcasts: builder.query({
            query: () => `shows/`,
        }),
        getPodcastById: builder.query({
            query: (id) => `id/${id}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPodcastsQuery, useGetPodcastByIdQuery } = podcastApi
