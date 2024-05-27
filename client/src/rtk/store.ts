// store.js
import { configureStore } from "@reduxjs/toolkit";
import { api } from ".";

export const store = configureStore({
  reducer: {
    // Include the API slice in your Redux store
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
