import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../hooks/api";

export const productsStatApi = createApi({
  reducerPath: "productsStatApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["ProductsStat"],
  endpoints: (build) => ({
    fetchProductsStat: build.query({
      query: ({ collection, page, take }) => ({
        url: `/product-statistic/get-product-by-collection/${collection}`,
        params: {
          page,
          take,
        },
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || ""
          )}`,
        },
      }),
      providesTags: ["ProductsStat"],
    }),
    fetchPopularProducts: build.query({
      query: () => ({
        url: "/order/popular-product/price",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || ""
          )}`,
        },
      }),
      providesTags: ["ProductsStat"],
    }),
  }),
});

export const { useFetchProductsStatQuery, useFetchPopularProductsQuery } =
  productsStatApi;
