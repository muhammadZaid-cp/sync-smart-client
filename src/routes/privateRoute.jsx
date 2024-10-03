import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoute() {
  //   const currentUser = localStorage.getItem("token");
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}

export default PrivateRoute;
