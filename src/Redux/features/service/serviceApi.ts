import { ParamSerialization } from "@/lib/ParamsSerialization";
import { apiSlice } from "../../api/apiSlice";

export const serviceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postService: builder.mutation({
      query: (data) => ({
        url: `/service`,
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["service"],
    }),

    getService: builder.query({
      query: (args: Record<string, unknown>) => {
        const query = args ? ParamSerialization(args) : "";
        return `/service?${query}`;
      },
      providesTags: ["service"],
    }),

    editService: builder.mutation({
      query: ({ id, data }) => ({
        url: `/service/${id}`,
        method: "PUT",
        body: { ...data },
      }),
      invalidatesTags: ["service"],
    }),
  }),
});

export const {
  useEditServiceMutation,
  useGetServiceQuery,
  usePostServiceMutation,
} = serviceApi;
