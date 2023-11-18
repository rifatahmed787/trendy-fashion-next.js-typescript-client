import { apiSlice } from "@/Redux/api/apiSlice";
import { ParamSerialization } from "@/lib/ParamsSerialization";

export const wishApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Get All wish products
    getWishList: builder.query({
      query: (args: Record<string, unknown>) => {
        const query = args ? ParamSerialization(args) : "";
        return `/wish/wishlist?${query}`;
      },
      providesTags: ["wishlist"],
    }),

    //   Add product in wish
    addProductInWish: builder.mutation({
      query: (data) => ({
        url: `/wish`,
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["wishlist"],
    }),
    //   delete from wish
    deleteProductFromWish: builder.mutation({
      query: (data) => ({
        url: `/wish/${data?.id}`,
        method: "DELETE",
        body: { ...data },
      }),
      invalidatesTags: ["wishlist"],
    }),
  }),
});

export const {
  useAddProductInWishMutation,
  useDeleteProductFromWishMutation,
  useGetWishListQuery,
} = wishApi;
