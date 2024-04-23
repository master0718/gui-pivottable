import { configureStore } from '@reduxjs/toolkit';

import { reducers } from './root-reducer';

export const store = configureStore({
    reducer: reducers,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})

// create types for state and dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch