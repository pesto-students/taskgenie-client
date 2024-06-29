import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		/**
		 * Base URL
		 */
		baseUrl: "https://taskgenie-api-1lye.onrender.com/api",
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
		signUp: builder.mutation({
			query: (data) => ({
				url: "/auth/signUp",
				method: "POST",
				body: data,
			}),
		}),
		signIn: builder.mutation({
			query: (data) => ({
				url: "/auth/signIn",
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
			query: () => `/user/profileStatus`,
		}),
		updateUserProfile: builder.mutation({
			query: (data) => ({
				url: `/user/:id/profileStatus`,
				method: "PATCH",
				body: data,
			}),
		}),
		setupProfile: builder.mutation({
			query: (data) => {
				return {
					url: `/user`,
					method: "PATCH",
					body: data,
				};
			},
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
		getQuotes: builder.query({
			query: (taskId) => `/tasks/${taskId}/quotes`,
		}),
		acceptQuote: builder.mutation({
			query: ({ taskId, selectedQuoteId }) => {
				return {
					url: `/tasks/${taskId}/quotes/${selectedQuoteId}/accept`,
					method: "POST",
				};
			},
		}),
	}),
});

export const {
	useSignUpMutation,
	useSignInMutation,
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
	useGetQuotesQuery,
	useAcceptQuoteMutation,
} = apiSlice;
export default apiSlice;
