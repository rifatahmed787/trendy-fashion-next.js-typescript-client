import { ParamSerialization } from "@/lib/ParamsSerialization";
import { apiSlice } from "../../api/apiSlice";

export const sliderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postSlider: builder.mutation({
      query: (data) => ({
        url: `/slider`,
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["slider"],
    }),

    getSlider: builder.query({
      query: (args: Record<string, unknown>) => {
        const query = args ? ParamSerialization(args) : "";
        return `/slider?${query}`;
      },
      providesTags: ["slider"],
    }),

    editSlider: builder.mutation({
      query: ({ id, data }) => ({
        url: `/slider/${id}`,
        method: "PUT",
        body: { ...data },
      }),
      invalidatesTags: ["slider"],
    }),
  }),
});

export const {
  useEditSliderMutation,
  useGetSliderQuery,
  usePostSliderMutation,
} = sliderApi;
