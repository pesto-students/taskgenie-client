import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || null,
    refreshToken: localStorage.getItem("refreshToken") || null,
    isAuthenticated: false,
  },
  reducers: {
    setTokens: (state, action) => {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
    },
    logout: (state) => {
      state.token = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
    },
  },
});
