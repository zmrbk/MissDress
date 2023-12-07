import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API } from "../../hooks/api";

export const apiAuth = createApi({
  reducerPath: "apiAuth",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["POSTAuth"],
  endpoints: (build) => ({
    userSignUp: build.mutation({
      query: (auth) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: auth,
      }),
      invalidatesTags: ["POSTAuth"],
    }),

    getSmsCode: build.query({
      query: (id) => ({
        url: `/auth/sms-code/${id}`,
      }),
      providesTags: ["POSTAuth"],
    }),
    sendActivateCode: build.mutation({
      query: (auth) => ({
        url: `/auth/activate`,
        method: "POST",
        body: auth,
      }),
      invalidatesTags: ["POSTAuth"],
    }),
    userLogin: build.mutation({
      query: (number) => ({
        url: "auth/login",
        method: "POST",
        body: number,
      }),
      invalidatesTags: ["POSTAuth"],
    }),
  }),
});
export const {
  useUserSignUpMutation,
  useUserLoginMutation,
  useLazyGetSmsCodeQuery,
  useSendActivateCodeMutation,
} = apiAuth;
// user/sms-code/id-sigh up
