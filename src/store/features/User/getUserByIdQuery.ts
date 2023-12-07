import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../hooks/api";
import { token } from "../../../utils/token";

export const getUserById = createApi({
  reducerPath: "getUserById",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["GetUserById"],
  endpoints: (build) => ({
    fetchUserById: build.query({
      query: (id) => ({
        url: `/user/${id}`,
        headers: {
          Authorization: token,
        },
      }),
      providesTags: ["GetUserById"],
    }),
  }),
});

export const { useFetchUserByIdQuery } = getUserById;
