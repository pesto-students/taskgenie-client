// reduxPersistConfig.js
import storage from "redux-persist/lib/storage"; // You can change this to session storage or another storage engine if needed
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "auth",
  storage,
};
const reduxPersistConfig = (reducer) => persistReducer(persistConfig, reducer);

export default reduxPersistConfig;
