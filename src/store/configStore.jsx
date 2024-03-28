import { apiSlice } from "./apiSlice";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice"; // Import the authSlice reducer

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice.reducer, // Include the authSlice reducer under the "auth" key
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
