import { apiSlice } from "@/Redux/api/apiSlice";
import { ParamSerialization } from "@/lib/ParamsSerialization";

export const cartApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCartProducts: builder.query({
      query: (args: Record<string, unknown>) => {
        const query = args ? ParamSerialization(args) : "";
        return `/cart/cartdata/${query}`;
      },
      providesTags: ["cart"],
    }),

    //   Add products in cart
    addToCart: builder.mutation({
      query: (data) => ({
        url: `/cart`,
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["cart"],
    }),

    updateCart: builder.mutation({
      query: ({ cartId, quantity }) => ({
        url: `/cart/${cartId}`,
        method: "PATCH",
        body: { quantity },
      }),
      invalidatesTags: ["cart", "products"],
    }),
    updateColor: builder.mutation({
      query: ({ cartId, data }) => ({
        url: `/cart/update-color/${cartId}`,
        method: "PUT",
        body: { data },
      }),
      invalidatesTags: ["cart", "products"],
    }),
    updateSize: builder.mutation({
      query: ({ cartId, data }) => ({
        url: `/cart/update-size/${cartId}`,
        method: "PUT",
        body: { data },
      }),
      invalidatesTags: ["cart", "products"],
    }),

    //remove from cart
    removeCart: builder.mutation({
      query: (data) => ({
        url: `/cart/${data?.id}`,
        method: "DELETE",
        body: { ...data },
      }),
      invalidatesTags: ["cart"],
    }),

    // clear cart
    clearCart: builder.mutation({
      query: () => ({
        url: `/cart`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useRemoveCartMutation,
  useGetCartProductsQuery,
  useUpdateCartMutation,
  useClearCartMutation,
  useUpdateColorMutation,
  useUpdateSizeMutation
} = cartApi;
