import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const navApi = createApi({
  reducerPath: "navApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL }),

  endpoints: (builder) => ({
    getNavData: builder.query({
      query: () => `/api/v1/nav-sale`,
    }),
    getProductBySlug: builder.query({
      query: (slug) => `/api/v1/product/${slug}`,
    }),
  }),
});

export const { useGetNavDataQuery, useGetProductBySlugQuery } = navApi;
