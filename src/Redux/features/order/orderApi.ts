import { apiSlice } from "@/Redux/api/apiSlice";
import { ParamSerialization } from "@/lib/ParamsSerialization";

export const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrderByUser: builder.query({
      query: (args: Record<string, unknown>) => {
        const query = args ? ParamSerialization(args) : "";
        return `/order/orderbyid?${query}`;
      },
      providesTags: ["order"],
    }),
  }),
});

export const { useGetOrderByUserQuery } = orderApi;
