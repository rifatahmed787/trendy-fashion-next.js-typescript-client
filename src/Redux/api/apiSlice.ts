import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: "apis",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://trendy-fashion-server.vercel.app/api/v1",
    // baseUrl: "http://localhost:5000/api/v1",

    prepareHeaders(headers, { getState }) {
      // Access the authentication token from the Redux store
      const authToken = (getState() as RootState).auth.accessToken;
      if (authToken) {
        headers.set("Authorization", `Bearer ${authToken}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    "filteringItems",
    "products",
    "latest_products",
    "best_seller",
    "product",
    "incompletetask",
    "accordian",
    "wishlist",
    "cart",
    "reviews",
    "payment",
    "order",
    "profile",
    "user",
  ],

  endpoints: () => ({}),
});
