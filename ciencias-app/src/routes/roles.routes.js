import React from "react";
import { Navigate } from "react-router-dom";
import { Background } from "../components/background/background.component";
import { isAuthenticated } from "../functions/auth.function";

export const AppRoute = ({children}) => {
  return (<div>
    {children}
    <Background/>
  </div>);
}

export const SecretaryRoute = ({children}) => {
  return isAuthenticated() ? <AppRoute>{children}</AppRoute> : <Navigate to="/app/signin" />;
}