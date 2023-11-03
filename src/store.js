import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from './services/pokemon'
import { podcastApi } from './services/podcasts'
import counterReducer from './slices/counter/counterSlice'
import audioReducer from './slices/audio/audioSlice'

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [pokemonApi.reducerPath]: pokemonApi.reducer,
        [podcastApi.reducerPath]: podcastApi.reducer,
        counter:counterReducer,
        audio:audioReducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware, podcastApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
