import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API } from "../../../hooks/api";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["Order"],
  endpoints: (build) => ({
    getOrder: build.query({
      query: () => ({
        url: "/order",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || ""
          )}`,
        },
      }),
      providesTags: ["Order"],
    }),
    saveOrder: build.mutation({
      query: (body) => ({
        url: "/order",
        method: "POST",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || ""
          )}`,
        },
        body,
      }),
    }),
  }),
});

export const { useGetOrderQuery, useSaveOrderMutation } = orderApi;
