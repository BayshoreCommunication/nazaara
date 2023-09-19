import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/api/v1/product`,
    }),
    getProductByID: builder.query({
      query: (id) => `/api/v1/product/${id}`,
    }),
  }),
});

export const { useGetProductByIDQuery, useGetProductsQuery } = productsApi;
