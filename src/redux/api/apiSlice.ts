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
  }),
});

export const { useCreateUserMutation } = api;
