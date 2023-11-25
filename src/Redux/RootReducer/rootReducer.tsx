import { combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import authReducer from "../features/auth/authSlice";
import uiReducer from "../features/ui/uiSlice";
import searchReducer from "../features/products/searchSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "../features/cart/cartSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,

  auth: authReducer,
  ui: uiReducer,
  search: searchReducer,
  cart: persistReducer(persistConfig, cartReducer),
});

export default rootReducer;
