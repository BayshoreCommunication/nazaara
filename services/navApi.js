import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const navApi = createApi({
  reducerPath: "navApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL,
    prepareHeaders: (headers) => {
      headers.set(
        "authorization",
        `Nazaara@Token ${process.env.API_SECURE_KEY}`
      );
      return headers;
    },
  }),

  endpoints: (builder) => ({
    // getNavData: builder.query({
    //   query: () => `/api/v1/nav-sale`,
    // }),
    getNavData: builder.query({
      query: ({ saleTitle, navCategoryTitle }) => {
        return `/api/v1/nav-sale?saleTitle=${saleTitle}&navCategoryTitle=${navCategoryTitle}`;
      },
    }),
    getProductBySlug: builder.query({
      query: (slug) => `/api/v1/product/${slug}`,
    }),
  }),
});

export const { useGetNavDataQuery, useGetProductBySlugQuery } = navApi;
