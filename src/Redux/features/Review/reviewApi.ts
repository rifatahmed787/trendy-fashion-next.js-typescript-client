import { ParamSerialization } from "@/lib/ParamsSerialization";
import { apiSlice } from "@/Redux/api/apiSlice";

export const reviewApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //   Add product review
    addProductReview: builder.mutation({
      query: (data) => ({
        url: `/reviews`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["products", "reviews"],
    }),
  }),
});

export const { useAddProductReviewMutation } = reviewApi;
