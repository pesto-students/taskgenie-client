import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
// Function to check if access token exists in localStorage
const isAccessTokenExists = () => {
	const accessToken = localStorage.getItem("accessToken");
	return accessToken !== null && accessToken !== "null";
};
// TODO: add functionality to check if jwt token has been expired
const isTokenExpired = () => {
	const accessToken = localStorage.getItem("accessToken");
	if (!accessToken) {
		return true;
	}
	const decodedToken = jwtDecode(accessToken);
	const currentTime = Math.floor(Date.now() / 1000);
	return decodedToken.exp < currentTime;
};
// TODO: Add functionality to check if refresh token is expired
const isRefreshTokenExpired = () => {
	const refreshToken = localStorage.getItem("refreshToken");
	if (!refreshToken) {
		return true; // Refresh token doesn't exist
	}
	const decodedToken = jwtDecode(refreshToken);
	const currentTime = Math.floor(Date.now() / 1000); // Convert milliseconds to seconds
	return decodedToken.exp < currentTime;
};

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		accessToken: localStorage.getItem("accessToken") ?? null,
		refreshToken: localStorage.getItem("refreshToken") ?? null,
		isAuthenticated: isAccessTokenExists(), // Set isAuthenticated based on accessToken presence
		userId: localStorage.getItem("userId") ?? null,
		isProfileComplete:
			JSON.parse(localStorage.getItem("isProfileComplete")) ?? false,
	},
	reducers: {
		setTokens: (state, action) => {
			state.accessToken = action.payload.accessToken;
			state.refreshToken = action.payload.refreshToken;
			state.isAuthenticated = true;
			localStorage.setItem("accessToken", action.payload.accessToken);
			localStorage.setItem("refreshToken", action.payload.refreshToken);
			state.userId = action.payload.user.id;
			localStorage.setItem("userId", action.payload.user.id);
		},
		logout: (state) => {
			state.accessToken = null;
			state.refreshToken = null;
			state.isAuthenticated = false;
			state.userId = null;
			localStorage.removeItem("accessToken");
			localStorage.removeItem("refreshToken");
			localStorage.removeItem("userId");
		},
		updateProfileStatus: (state) => {
			state.isProfileComplete = true;
			localStorage.setItem("isProfileComplete", JSON.stringify(true));
		},
	},
});
// Selectors
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUserId = (state) => state.auth.userId;
export const selectIsProfileComplete = (state) => state.auth.isProfileComplete;
export const { setTokens, logout, updateProfileStatus } = authSlice.actions;
export default authSlice.reducer;
