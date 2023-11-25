import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import rootReducer from "./RootReducer/rootReducer";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      apiSlice.middleware
    ),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
