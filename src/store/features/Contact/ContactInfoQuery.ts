import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../hooks/api";

export const contactInfoApi = createApi({
  reducerPath: "contactInfoApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["ContactInfo"],
  endpoints: (build) => ({
    addContactInfo: build.mutation({
      query: (user) => ({
        url: "/contact-info",
        method: "POST",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || ""
          )}`,
        },
        body: user,
      }),
      invalidatesTags: ["ContactInfo"],
    }),
    updateContactInfo: build.mutation({
      query: ({ data, id }) => ({
        url: `/contact-info/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || ""
          )}`,
        },
        body: data,
      }),
      invalidatesTags: ["ContactInfo"],
    }),
  }),
});

export const { useAddContactInfoMutation, useUpdateContactInfoMutation } =
  contactInfoApi;
