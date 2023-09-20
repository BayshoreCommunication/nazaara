import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.API_URL}` }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/api/v1/product",
    }),
    getProductsCategories: builder.query({
      query: () => "/api/v1/product/categories",
    }),
    getProductErpId: builder.query({
      query: () => `/api/v1/product/erpid`,
    }),
    getProductById: builder.query({
      query: (id) => `/api/v1/product/${id}`,
    }),
    createProduct: builder.mutation({
      query: (payload) => ({
        url: "/api/v1/product",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        await dispatch(productsApi.endpoints.getProductById.initiate(data._id));
        await dispatch(
          productsApi.endpoints.getProducts.initiate({ page: 1, limit: 10 })
        );
      },
    }),
    updateProduct: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/api/v1/product/${id}`,
        method: "PATCH",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        await dispatch(productsApi.endpoints.getProductById.initiate(data._id));
        await dispatch(
          productsApi.endpoints.getProducts.initiate({ page: 1, limit: 10 })
        );
      },
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/api/v1/product/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsCategoriesQuery,
  useGetProductErpIdQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productsApi;
