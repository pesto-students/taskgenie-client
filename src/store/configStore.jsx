import { apiSlice } from "./apiSlice";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice"; // Import the authSlice reducer

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice.reducer, // Include the authSlice reducer under the "auth" key
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
