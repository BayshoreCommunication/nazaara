import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL }),

  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/api/v1/user`,
    }),
    getUserByID: builder.query({
      query: (id) => `/api/v1/user/${id}`,
    }),
    getUserAddressByID: builder.query({
      query: (id) => `/api/v1/user-addressbook/${id}`,
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIDQuery,
  useGetUserAddressByIDQuery,
} = usersApi;
