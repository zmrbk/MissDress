import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../../hooks/api";

export const meApi = createApi({
  reducerPath: "meApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["Me"],
  endpoints: (build) => ({
    fetchUserMe: build.query({
      query: () => ({
        url: "/user/me",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || ""
          )}`,
        },
      }),
      providesTags: ["Me"],
    }),
    addPhone: build.mutation({
      query: (data) => ({
        url: "/user/add-phone",
        method: "POST",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || ""
          )}`,
        },
        body: {
          phoneNumber: data,
        },
      }),
      invalidatesTags: ["Me"],
    }),
    updatePhone: build.mutation({
      query: (data) => ({
        url: "user/update-phone",
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || ""
          )}`,
        },
        body: {
          phoneNumber: data.phoneNumber,
          code: data.code,
        },
      }),
      invalidatesTags: ["Me"],
    }),
  }),
});

export const {
  useFetchUserMeQuery,
  useAddPhoneMutation,
  useUpdatePhoneMutation,
} = meApi;
