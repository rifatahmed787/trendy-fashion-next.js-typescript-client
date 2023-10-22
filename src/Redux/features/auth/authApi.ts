import {
  ILoginArgs,
  ILoginRes,
  IRegister,
  IRegisterRes,
} from "../../../types/auth.types";
import { apiSlice } from "../../api/apiSlice";
import { login } from "./authSlice";
import Cookies from "js-cookie";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userRegister: builder.mutation<IRegisterRes, IRegister>({
      query: (data) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
    }),

    userLogin: builder.mutation<ILoginRes, ILoginArgs>({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(loginArgs, { dispatch, queryFulfilled }) {
        try {
          const loginRes = await queryFulfilled;
          console.log(loginRes);

          if (loginRes) {
            dispatch(
              login({
                isLoggedIn: true,
                user: loginRes?.data?.data?.email || null,
                accessToken: loginRes?.data?.data?.accessToken || null,
                refreshToken: loginRes?.data?.data?.refreshToken || null,
              })
            );

            Cookies.set(
              "user",
              JSON.stringify({
                user: loginRes?.data?.data?.email,
                isLoggedIn: true,
              })
            );

            Cookies.set("token", loginRes?.data?.data?.accessToken ?? "");
          }
        } catch {
          //do nothing
          console.log({ loginArgs });
        }
      },
    }),

    userLogOut: builder.mutation<unknown, void>({
      query: (data) => ({
        url: "/auth/logout",
        method: "POST",
        body: data,
      }),
    }),

    //   userResetPass: builder.mutation<IUserResetPassRes, IUserResetPassArgs>({
    //     query: (data) => ({
    //       url: "/auth/reset-password",
    //       method: "POST",
    //       body: data,
    //     }),
    //   }),

    //   userPassWordChange: builder.mutation<
    //     IUserPassWordChangeRes,
    //     IUserPassWordChangeArgs
    //   >({
    //     query: (data) => ({
    //       url: "/auth/change-password",
    //       method: "POST",
    //       body: data,
    //     }),
    //   }),

    //   userFollow: builder.mutation({
    //     query: (data) => ({
    //       url: "/follow/following",
    //       method: "POST",
    //       body: data,
    //     }),
    //   }),

    // getUserDetails: builder.query<IGetUserDetailsRes, IGetUserDetailsArgs>({
    //   query: () => ({
    //     url: "/auth/get-user-details",
    //     method: "GET",
    //   }),
    // }),
  }),
});

export const {
  useUserLoginMutation,
  useUserRegisterMutation,
  // useUserResetPassMutation,
  useUserLogOutMutation,
  // useUserPassWordChangeMutation,
  // useUserGetByIdQuery,
  // useGetUserDetailsQuery,
} = authApi;
