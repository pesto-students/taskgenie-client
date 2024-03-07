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
      query: () => "/user/:id/profileStatus",
    }),
    updateUserProfile: builder.mutation({
      query: (data, id) => ({
        url: `/user/${id}/profileStatus`,
        method: "PATCH",
        body: data,
      })
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

export const { useSignupMutation, useSigninMutation, useSetupProfileMutation, useGetUserProfileQuery, useUpdateUserProfileMutation } = apiSlice;
export default apiSlice;
