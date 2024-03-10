import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    /**
     * Base URL
     */
    baseUrl: "http://localhost:5000/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.accessToken;
      if (token) {
        // Attach authorization token with the request
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    /**
     * Auth Endpoints
     */
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
    /**
     * My Tasks Endpoints
     */
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
    /**
     * Browse Tasks Endpoints
     */
    getTasks: builder.query({
      query: (filters) => ({
        url: `/tasks?distance=${filters.distance}`,
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useSigninMutation,
  useGetMyTasksQuery,
  useGetTaskDetailsQuery,
  useGetTasksQuery,
} = apiSlice;
export default apiSlice;
