import { apiSlice } from "@/Redux/api/apiSlice";

export const accordianApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    accordian: builder.mutation({
      query: ({ data }) => ({
        url: "/accordian/productfaq",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["accordian"],
    }),

    getAccordian: builder.query({
      query: () => `/accordian/productfaq`,
      providesTags: ["accordian"],
    }),
  }),
});

export const { useAccordianMutation, useGetAccordianQuery } = accordianApi;
