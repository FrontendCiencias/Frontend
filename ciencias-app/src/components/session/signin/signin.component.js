import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signin } from "../../../api/secretary.api";
import { authenticate, isAuthenticated } from "../../../functions/auth.function";

import { ActionButton } from "../../buttons/action/action-button.component";
import Input from "../../input/input.component";

import "./signin.style.css"
import { changeUser } from "../../../features/auth/auth.slice";

export const SignIn = (props) => {

  const dispatch = useDispatch()

  const collegueState = useSelector(state => state.collegue)

  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
    redirect: false
  })

  const {email, password, error, loading, redirect} = values
  const user = isAuthenticated()

  const clickSubmit = (event) => {
    event.preventDefault()
    setValues({...values, error: false, loading: true})
    signin({email, password})
    .then(d => {
      if (d.error) {
        setValues({...values, error: d.error, loading: false})
      } else { 
        dispatch(changeUser(d.data))
        authenticate(
          {...d, collegue:collegueState}, () => {
            setValues({
              ...values,
              redirect: true
            })
          }
        )
      }
    })
  }

  const RedirectUser = () => {
    if (redirect) {
      if (user) {
        return <Navigate replace to='/app/secretary'/>
      }
    }
    if (user) {
      return <Navigate replace to='/app/secretary'/>
    }
  }

  const showError = () => (
    error &&
    (<div className="error">
      {error}
    </div>)
  )

  const showLoading = () => (
    loading &&
    (<div className="loading">
      Cargando...
    </div>)
  )

  return (
    <div className={`signin ${props.shown}`}>
      {RedirectUser()}
      <h2>Hola!</h2>
      <p>Ingresa a tu cuenta</p>
      <form className="form-signin">
        <div className="inputs">
          <Input
            values={values}
            setValues={setValues}
            type='text'
            id='email'
            label='E-mail'
          />
          <Input
            values={values}
            setValues={setValues}
            type='password'
            id='password'
            label='Contraseña'
          />
        </div>
        <div className="button-submit">
          <a onClick={clickSubmit}>
            <ActionButton
              type='primary'
              text='Ingresar'
              collegue={collegueState}
            />
          </a>
        </div>
      </form>
      {showError()}
      {showLoading()}
    </div>
  )
}

export default SignIn