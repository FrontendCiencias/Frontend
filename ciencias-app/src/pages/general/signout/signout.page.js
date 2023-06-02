import React from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { changeUser } from "../../../features/auth/auth.slice";
import { changeCollegue } from "../../../features/collegue/collegue.slice";

const SignOut = () => {
  
  const dispatch = useDispatch()
  
  dispatch(changeUser({}))
  dispatch(changeCollegue("none"))
  localStorage.removeItem('jwt');
  return <Navigate replace to='/app'/>
}

export default SignOut;