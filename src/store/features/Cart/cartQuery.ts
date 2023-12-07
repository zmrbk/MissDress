import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ICart } from "../../../types/cartPageTypes/orderFormTypes";

import { API } from "../../../hooks/api";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["Cart"],
  endpoints: (build) => ({
    getProductFromCard: build.query<ICart, void>({
      query: () => ({
        url: "/cart",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || ""
          )}`,
        },
      }),
      providesTags: ["Cart"],
    }),
    addProductToCart: build.mutation<ICart, any>({
      query: (product) => ({
        url: "/cart/add",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || ""
          )}`,
        },
        method: "PATCH",
        body: {
          productId: product.id,
          totalCount: product.amount,
        },
      }),
      invalidatesTags: ["Cart"],
    }),
    deleteProductFromCart: build.mutation<ICart, number>({
      query: (productId) => ({
        url: "cart",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || ""
          )}`,
        },
        method: "DELETE",
        body: { productId },
      }),
      invalidatesTags: ["Cart"],
    }),
    reduceProductFromCart: build.mutation<ICart, number>({
      query: (productId) => ({
        url: "/cart/reduce",
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || ""
          )}`,
        },
        body: { productId },
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useGetProductFromCardQuery,
  useAddProductToCartMutation,
  useDeleteProductFromCartMutation,
  useReduceProductFromCartMutation,
} = cartApi;
