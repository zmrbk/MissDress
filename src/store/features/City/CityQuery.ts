import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../hooks/api";

export const cityApi = createApi({
  reducerPath: "cityApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["City"],
  endpoints: (build) => ({
    getCity: build.query({
      query: () => ({
        url: "/city/get-by-country/1",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || ""
          )}`,
        },
      }),
      providesTags: ["City"],
    }),
  }),
});

export const { useGetCityQuery } = cityApi;
