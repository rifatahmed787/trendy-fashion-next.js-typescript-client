import { ParamSerialization } from "@/lib/ParamsSerialization";
import { apiSlice } from "../../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userGetById: builder.query({
      query: (args: Record<string, unknown>) => {
        const query = args ? ParamSerialization(args) : "";
        return `/user/userinfo?${query}`;
      },
      providesTags: ["profile", "user"],
    }),

    postAddress: builder.mutation({
      query: (data) => ({
        url: `/user/address`,
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["profile"],
    }),

    editUser: builder.mutation({
      query: (data) => ({
        url: `/user/updateuser`,
        method: "PATCH",
        body: { ...data },
      }),
      invalidatesTags: ["profile"],
    }),
  }),
});

export const {
  useUserGetByIdQuery,
  usePostAddressMutation,
  useEditUserMutation,
} = userApi;
