import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../hooks/api";

export const collectionApi = createApi({
  reducerPath: "collectionApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["Collection"],
  endpoints: (build) => ({
    fetchCollection: build.query({
      query: () => ({
        url: "/collections/all",
        headers: {
          Authorization: process.env.REACT_APP_API_TOKEN,
        },
      }),
      providesTags: ["Collection"],
    }),
  }),
});

export const { useFetchCollectionQuery } = collectionApi;
