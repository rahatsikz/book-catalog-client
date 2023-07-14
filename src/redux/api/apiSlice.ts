/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (loginData) => ({
        url: "/users/signup",
        method: "POST",
        body: loginData,
      }),
    }),
    loginUser: builder.mutation({
      query: (loginData) => ({
        url: "/users/login",
        method: "POST",
        body: loginData,
      }),
    }),
    getAllBooks: builder.query({
      query: () => "/books",
    }),
    getLatestBooks: builder.query({
      query: () => "/books/latest",
    }),
    addBook: builder.mutation({
      query: (bookInfo) => ({
        url: "/books/addbook",
        method: "POST",
        body: bookInfo,
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useGetAllBooksQuery,
  useAddBookMutation,
  useGetLatestBooksQuery,
} = api;
