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
    getMyTaskDetails: builder.query({
      query: (taskId) => ({
        url: `/my-tasks/${taskId}`,
      }),
    }),
    getTaskDetails: builder.query({
      query: (taskId) => ({
        url: `/tasks/${taskId}`,
      }),
    }),
    postTask: builder.mutation({
      query: (data) => {
        return {
          url: "/my-tasks/",
          method: "POST",
          body: data,
        };
      },
    }),
    cancelTask: builder.mutation({
      query: (taskId) => ({
        url: `my-tasks/${taskId}`,
        method: "DELETE",
      }),
    }),
    /**
     * Browse Tasks Endpoints
     */
    getTasks: builder.query({
      query: ({ distance, locationType, priceRange, taskStatus, lat, lng }) => {
        let url = "/tasks?";
        if (distance) url += `distance=${distance}&`;
        if (locationType) url += `locationType=${locationType}&`;
        if (taskStatus) url += `status=${taskStatus}&`;
        if (lng) url += `lng=${lng}&`;
        if (lat) url += `lat=${lat}&`;
        if (priceRange)
          url += `minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}&`;

        // Remove the trailing '&' if it exists
        url = url.endsWith("&") ? url.slice(0, -1) : url;
        return { url };
      },
    }),

    /**
     * User Profile
     */
    getProfileStatus: builder.query({
      query: (id) => `/user/${id}/profileStatus`,
    }),
    updateUserProfile: builder.mutation({
      query: (data) => ({
        url: `/user/:id/profileStatus`,
        method: "PATCH",
        body: data,
      }),
    }),
    setupProfile: builder.mutation({
      query: (data, id) => ({
        url: `/user/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    getUserById: builder.query({
      query: (userId) => `/user/${userId}/`,
    }),
    getUserNameById: builder.query({
      query: (userId) => `/user/${userId}/name`,
    }),
    /**
     * Questions
     */
    postQuestion: builder.mutation({
      query: ({ taskId, body }) => ({
        url: `/task/${taskId}/questions`,
        method: "POST",
        body,
      }),
    }),
    replyToQuestion: builder.mutation({
      query: ({ taskId, questionId, userId, message }) => ({
        url: `/task/${taskId}/questions/${questionId}`,
        method: "POST",
        body: {
          userId,
          message,
        },
      }),
    }),
    /**
     * Quotes
     */
    addQuote: builder.mutation({
      query: ({ taskId, body }) => {
        return {
          url: `/tasks/${taskId}/quotes`,
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const {
  useSignupMutation,
  useSigninMutation,
  usePostTaskMutation,
  useGetMyTasksQuery,
  useGetMyTaskDetailsQuery,
  useCancelTaskMutation,
  useGetTaskDetailsQuery,
  useGetTasksQuery,
  usePostQuestionMutation,
  useReplyToQuestionMutation,
  useSetupProfileMutation,
  useGetProfileStatusQuery,
  useUpdateUserProfileMutation,
  useGetUserByIdQuery,
  useGetUserNameByIdQuery,
  useAddQuoteMutation,
} = apiSlice;
export default apiSlice;
