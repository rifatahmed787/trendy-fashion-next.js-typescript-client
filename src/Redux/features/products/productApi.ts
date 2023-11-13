import { apiSlice } from "@/Redux/api/apiSlice";
import { IProduct } from "@/Types/products";
import { ParamSerialization } from "@/lib/ParamsSerialization";

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Get All products
    getProducts: builder.query({
      query: (args: Record<string, unknown>) => {
        const query = args ? ParamSerialization(args) : "";
        return `/product/allproducts?${query}`;
      },
      providesTags: ["products"],
    }),

    //Get latest-ten
    getLatestProducts: builder.query({
      query: () => `/product/latest-ten`,
      providesTags: ["latest_products"],
    }),

    //get best seller products
    getBestSellerProducts: builder.query({
      query: () => `/product/best-seller`,
      providesTags: ["best_seller"],
    }),

    //Get  product details
    getProductDetails: builder.query({
      query: (productID) => {
        return `/product/${productID}`;
      },
      providesTags: ["product"],
    }),

    //Get All Filtering Items
    getUniqueFilteringItems: builder.query({
      query: () => "/product/unique-filter-items",
      providesTags: ["filteringItems"],
    }),

    // Add Product
    addProduct: builder.mutation({
      query: (data: IProduct) => ({
        url: `/product`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["filteringItems", "latest_products"],
    }),

    //   delete products
    deleteProduct: builder.mutation({
      query: ({ productID }) => ({
        url: `/product/${productID}`,
        method: "DELETE",
      }),

      invalidatesTags: ["filteringItems", "latest_products"],

      async onQueryStarted({ productID }, { dispatch, queryFulfilled }) {
        try {
          const { data: product_data } = await queryFulfilled;

          // const patchResult =
          if (product_data) {
            //
          }
          dispatch(
            productsApi.util.updateQueryData(
              "getProductDetails",
              productID,
              (draft) => {
                return draft.filter(
                  (item: {
                    data: {
                      _id: string;
                    };
                  }) => item.data?._id != productID
                );
              }
            )
          );
        } catch {
          //
        }
      },
    }),

    // edit product
    editProduct: builder.mutation({
      query: ({ productID, product_data }) => ({
        url: `/product/${productID}`,
        method: "PATCH",
        body: { ...product_data },
      }),
      invalidatesTags: ["filteringItems", "products"],

      async onQueryStarted(
        { productID, product_data },
        { dispatch, queryFulfilled }
      ) {
        // test part
        if (!product_data) {
          //
        }

        try {
          const { data: product_data } = await queryFulfilled;

          const updatedProduct = product_data;

          // const patchResult =

          dispatch(
            productsApi.util.updateQueryData(
              "getProductDetails",
              productID,
              (draft) => {
                Object.assign(draft, updatedProduct);
              }
            )
          );
        } catch {
          //
        }
      },
    }),
  }),
});

export const {
  useAddProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,
  useGetBestSellerProductsQuery,
  useGetLatestProductsQuery,
  useGetProductDetailsQuery,
  useGetProductsQuery,
  useGetUniqueFilteringItemsQuery,
} = productsApi;
