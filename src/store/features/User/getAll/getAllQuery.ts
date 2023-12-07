import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../../hooks/api";

export const getAllApi = createApi({
  reducerPath: "getAllApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["GetAll"],
  endpoints: (build) => ({
    fetchUserGetAll: build.query({
      query: () => ({
        url: "/user/get-all",
      }),
      providesTags: ["GetAll"],
    }),
  }),
});
