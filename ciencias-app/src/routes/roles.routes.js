import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../functions/auth.function";


export const SecretaryRoute = ({children}) => {
  return isAuthenticated() ? children : <Navigate to="/app/signin" />;
}