import React from "react";
import { Navigate } from "react-router-dom";
import { Background } from "../components/background/background.component";
import { isAuthenticated, isAuxiliar, isSecretary } from "../functions/auth.function";

export const AppRoute = ({children}) => {
  return (<div>
    {children}
    <Background/>
  </div>);
}

export const SecretaryRoute = ({children}) => {
  return isSecretary() ? <AppRoute>{children}</AppRoute> : <Navigate to="/app/admin/secretary/signin" />;
}

export const AuxiliarRoute = ({children}) => {
  return isAuxiliar() ? <AppRoute>{children}</AppRoute> : <Navigate to="/app/admin/auxiliar/signin" />;
}