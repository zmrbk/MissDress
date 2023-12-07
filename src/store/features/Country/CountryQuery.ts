import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../hooks/api";

export const countryApi = createApi({
  reducerPath: "countryApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["Country"],
  endpoints: (build) => ({
    getCountry: build.query({
      query: () => ({
        url: "/country/get-all",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || ""
          )}`,
        },
      }),
      providesTags: ["Country"],
    }),
  }),
});

export const { useGetCountryQuery } = countryApi;
