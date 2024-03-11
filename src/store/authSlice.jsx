import { createSlice } from "@reduxjs/toolkit";

// Function to check if access token exists in localStorage
const isAccessTokenExists = () => {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken !== null && accessToken !== "null";
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: localStorage.getItem("accessToken") || null,
    refreshToken: localStorage.getItem("refreshToken") || null,
    isAuthenticated: isAccessTokenExists(), // Set isAuthenticated based on accessToken presence
    userId: localStorage.getItem("userId") || null,
    isSetupProfileComplete:
      localStorage.getItem("isSetupProfileComplete") || false,
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
      state.isSetupProfileComplete = true;
      localStorage.setItem("isSetupProfileComplete", true);
    },
  },
});

export const { setTokens, logout, updateProfileStatus } = authSlice.actions;
export default authSlice.reducer;
