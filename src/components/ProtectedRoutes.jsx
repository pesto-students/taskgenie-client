import React from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector hook

const ProtectedRoutes = ({ element }) => {
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Get isAuthenticated from Redux store

  if (isAuthenticated === undefined) {
    return null; // or loading indicator/spinner/etc
  }

  return isAuthenticated ? (
    <div>{element}</div>
  ) : (
    <Navigate
      to='/signin'
      replace
      state={{ from: location }}
    />
  );
};

export default ProtectedRoutes;
