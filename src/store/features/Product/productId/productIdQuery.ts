import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../../hooks/api";

export const productIdApi = createApi({
  reducerPath: "productIdApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["ProductId"],
  endpoints: (build) => ({
    getProductById: build.query({
      query: (productId) => ({
        url: `/product/${productId}`,
      }),
      providesTags: ["ProductId"],
    }),
  }),
});

export const { useGetProductByIdQuery } = productIdApi;
