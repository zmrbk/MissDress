import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../../hooks/api";

export const productGetAllApi = createApi({
  reducerPath: "productGetAllApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["ProductGetAll"],
  endpoints: (build) => ({
    fetchProductGetAll: build.query({
      query: ({ take, sort }) => ({
        url: "/product/get-all",
        params: {
          take,
          sort,
        },
      }),
      providesTags: ["ProductGetAll"],
    }),
    fetchProductsGetAll: build.query({
      query: ({ take, category, page, sort }) => ({
        url: "/product/get-all",
        params: {
          take,
          category,
          page,
          sort,
        },
      }),
      providesTags: ["ProductGetAll"],
    }),
    fetchProductsByCategory: build.query({
      query: (category) => ({
        url: `/product/get-all?category=${category}`,
      }),
      providesTags: ["ProductGetAll"],
    }),
    fetchProductBytitle: build.query({
      query: ({ name, page, sort }) => ({
        url: "/product/get-all",
        params: {
          name,
          page,
          sort,
        },
      }),
      providesTags: ["ProductGetAll"],
    }),
    addProductRate: build.mutation({
      query: (body) => ({
        url: "/product/set/rate",
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || ""
          )}`,
        },
        body,
      }),
      invalidatesTags: ["ProductGetAll"],
    }),
    fetchProductByCategory: build.query({
      query: ({ categoryId, collectionsType, take, page, sort }) => ({
        url: "/product/get-all",
        params: {
          category: categoryId,
          collectionsType,
          take,
          page,
          sort,
        },
      }),
      providesTags: ["ProductGetAll"],
    }),
  }),
});

export const {
  useFetchProductGetAllQuery,
  useFetchProductsGetAllQuery,
  useFetchProductsByCategoryQuery,
  useAddProductRateMutation,
  useFetchProductBytitleQuery,
  useFetchProductByCategoryQuery,
} = productGetAllApi;
