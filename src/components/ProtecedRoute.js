import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/authContext";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/signUp" />;
  }
  return children;
};

export default ProtectedRoute;