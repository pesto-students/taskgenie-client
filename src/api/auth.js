// api/auth.js

import axios from "axios";

export const signInAPI = async (email, password) => {
  return axios.post("/api/signin", { email, password });
};

export const signUpAPI = async (email, password) => {
  return axios.post("/api/signup", { email, password });
};
