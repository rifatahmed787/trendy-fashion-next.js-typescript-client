import { apiSlice } from "@/Redux/api/apiSlice";

export const paymentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPayment: builder.mutation({
      query: () => ({
        url: `/payment/pay`,
        method: "POST",
      }),
    }),
  }),
});

export const { useCreatePaymentMutation } = paymentApi;
