// components/PrivateRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
  const { userInfo } = useSelector((state) => state.user);
  const location = useLocation();

  if (!userInfo) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location.pathname, message: "Please login to continue" }}
      />
    );
  }

  return children;
}

export default PrivateRoute;
