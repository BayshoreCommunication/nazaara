import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath: "cartsApi",
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
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    getProductDetails: builder.query({
      query: (productId) => `/api/v1/product/${productId}`,
      providesTags: ["Cart"],
    }),
    getAllCarts: builder.query({
      query: () => `/api/v1/cart`,
      providesTags: ["Cart"],
    }),
    getCartByUserId: builder.query({
      query: (id) => `/api/v1/cart/user/${id}`,
      providesTags: ["Cart"],
    }),
    createNewCart: builder.mutation({
      query: (payload) => ({
        url: "/api/v1/cart",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Cart"],
    }),
    updateCartByUserId: builder.mutation({
      query: (payload) => ({
        url: `/api/v1/cart`,
        method: "PATCH",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Cart"],
    }),
    deleteCartByUserIdAndVariantId: builder.mutation({
      query: (payload) => ({
        url: `/api/v1/cart`,
        method: "DELETE",
        body: payload,
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useGetProductDetailsQuery,
  useGetAllCartsQuery,
  useGetCartByUserIdQuery,
  useCreateNewCartMutation,
  useDeleteCartByUserIdAndVariantIdMutation,
  useUpdateCartByUserIdMutation,
} = cartApi;
