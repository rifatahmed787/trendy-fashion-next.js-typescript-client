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

    getSingleReview:builder.query({
     query:(id)=>({
      url:`/reviews/${id}`,
     }),
     providesTags:["products", "reviews"],
    }),

    updateReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/reviews/${id}`,
        method: "PUT",
        body: { ...data },
      }),
      invalidatesTags: ["reviews", "products"],
    }),

    
    deleteReview: builder.mutation({
      query: (reviewId) => ({
        url: `/reviews/${reviewId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["reviews", "products"],
    }),

  }),
});

export const { useAddProductReviewMutation, useDeleteReviewMutation, useUpdateReviewMutation, useGetSingleReviewQuery } = reviewApi;
