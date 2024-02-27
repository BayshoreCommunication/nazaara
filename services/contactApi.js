import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
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
    getContacts: builder.query({
      query: () => `/api/v1/contact`,
    }),
    getContactByID: builder.query({
      query: (id) => `/api/v1/contact/${id}`,
    }),
  }),
});

export const { useGetContactsQuery, useGetContactByIDQuery } = contactsApi;
