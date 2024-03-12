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
    /**
     * Browse Tasks Endpoints
     */
    getTasks: builder.query({
      query: ({ distance, locationType, taskStatus, lat, lng }) => {
        let url = "/tasks?";
        url += distance ? `distance=${distance}&` : "";
        url += locationType ? `locationType=${locationType}&` : "";
        url += taskStatus ? `status=${taskStatus}&` : "";
        url += lng ? `lng=${lng}&` : "";
        url += lat ? `lat=${lat}&` : "";
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
      query: ({ taskId, questionId, body }) => ({
        url: `/tasks/${taskId}/questions/${questionId}`,
        method: "POST",
        body,
      }),
    }),
    /**
     * Quotes
     */
    addQuote: builder.mutation({
      query: ({ taskId, body }) => {
        console.log(body);
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
  useGetMyTasksQuery,
  useGetMyTaskDetailsQuery,
  useGetTaskDetailsQuery,
  useGetTasksQuery,
  usePostQuestionMutation,
  useSetupProfileMutation,
  useGetProfileStatusQuery,
  useUpdateUserProfileMutation,
  useGetUserByIdQuery,
  useAddQuoteMutation,
} = apiSlice;
export default apiSlice;
