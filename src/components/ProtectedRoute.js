import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/Userauthcontext";

export default function ProtectedRoute({ children }) {
  let { user } = useAuth();
  if (!user) {
    return <Navigate to="/" />;
  }
  return children ;
}
