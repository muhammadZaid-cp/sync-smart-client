import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoute() {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}

export default PrivateRoute;
