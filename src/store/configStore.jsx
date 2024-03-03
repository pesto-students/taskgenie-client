import { configureStore } from "@reduxjs/toolkit";
import workoutReducer from './workoutPlanSlice'
import { persistStore } from 'redux-persist';
import reduxPersistConfig from "./reduxPersistConfig";


const store =  configureStore({
    reducer: reduxPersistConfig(workoutReducer),
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()]
  
})

export const persistor = persistStore(store); // Create a persistor object

export default store