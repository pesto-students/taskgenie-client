import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().auth;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
    }),
    signin: builder.mutation({
      query: (data) => ({
        url: "/auth/signin",
        method: "POST",
        body: data,
      }),
    }),
    getUserProfile: builder.query({
      query: () => "/setup-profile",
    }),
    setupProfile: builder.mutation({
      query: (data) => ({
        url: "/setup-profile",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSignupMutation, useSigninMutation, useSetupProfileMutation, useGetUserProfileQuery } = apiSlice;
export default apiSlice;
