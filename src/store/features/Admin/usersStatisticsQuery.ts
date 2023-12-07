import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../hooks/api";

export const usersStatsApi = createApi({
  reducerPath: "usersStatsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["UsersList", "PopularUsers"],
  endpoints: (build) => ({
    fetchUsersStats: build.query({
      query: ({ take, page, sort }) => ({
        url: "/user/users-orders",
        params: {
          take,
          page,
          sort,
        },
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || ""
          )}`,
        },
      }),
      providesTags: ["UsersList"],
    }),

    deleteUser: build.mutation({
      query: (id) => ({
        url: `/user/admin/deletes/user/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || ""
          )}`,
        },
      }),
      invalidatesTags: ["UsersList"],
    }),

    fetchPopularUsers: build.query({
      query: () => ({
        url: "/order/popular-users/price",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || ""
          )}`,
        },
      }),
      providesTags: ["PopularUsers"],
    }),

    fetchUserInfo: build.query({
      query: () => ({
        url: "/user/me",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || ""
          )}`,
        },
      }),
    }),
  }),
});

export const {
  useFetchUsersStatsQuery,
  useFetchPopularUsersQuery,
  useFetchUserInfoQuery,
  useDeleteUserMutation,
} = usersStatsApi;
