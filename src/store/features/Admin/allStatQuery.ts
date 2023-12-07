import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../hooks/api";

export const allStatApi = createApi({
  reducerPath: "allStatApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["WidgetStat", "GraphStat"],
  endpoints: (build) => ({
    fetchAllStat: build.query({
      query: () => ({
        url: "/order/lastDate-order-report",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || ""
          )}`,
        },
      }),
      providesTags: ["WidgetStat"],
    }),
    fetchGraphStat: build.query({
      query: () => ({
        url: "/order/grafik",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || ""
          )}`,
        },
      }),
      providesTags: ["GraphStat"],
    }),
  }),
});

export const { useFetchAllStatQuery, useFetchGraphStatQuery } = allStatApi;
