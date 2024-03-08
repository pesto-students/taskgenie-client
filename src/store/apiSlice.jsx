import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.accessToken;
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
    getMyTasks: builder.query({
      query: ({ status, searchText }) => {
        return {
          url: `/my-tasks?status=${status}&searchText=${searchText}`,
        };
      },
    }),
    getTaskDetails: builder.query({
      query: (taskId) => ({
        url: `/my-tasks/${taskId}`,
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useSigninMutation,
  useGetMyTasksQuery,
  useGetTaskDetailsQuery,
} = apiSlice;
export default apiSlice;
