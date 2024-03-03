import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import reduxPersistConfig from "./reduxPersistConfig";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: reduxPersistConfig(authReducer),
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});

export const persistor = persistStore(store); // Create a persistor object

export default store;
