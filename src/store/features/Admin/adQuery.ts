import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../hooks/api";

export const adQueryApi = createApi({
  reducerPath: "adQueryApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["AD"],
  endpoints: (build) => ({
    fetchAllAd: build.query({
      query: () => ({
        url: "/ad/get-all",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || ""
          )}`,
        },
      }),
      providesTags: ["AD"],
    }),
  }),
});

export const { useFetchAllAdQuery } = adQueryApi;
