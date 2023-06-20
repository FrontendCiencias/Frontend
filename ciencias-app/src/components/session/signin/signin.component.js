import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { secretarysignin } from "../../../api/secretary.api";
import { authenticate, getRol, isAuthenticated } from "../../../functions/auth.function";

import { ActionButton } from "../../buttons/action/action-button.component";
import Input from "../../input/input.component";

import "./signin.style.css"
import { changeUser } from "../../../features/auth/auth.slice";
import { auxiliarsignin } from "../../../api/auxiliar.api";

export const SignIn = (props) => {

  const dispatch = useDispatch()

  const collegueState = useSelector(state => state.collegue)

  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
    redirect: false,
    submit: false
  })

  const {email, password, error, loading, redirect} = values
  const user = isAuthenticated()
  let rol = ""
  if (user) {
    rol = getRol() 
  } else {
    rol = props.rol
  }

  const clickSubmit = (event) => {
    event.preventDefault()
    setValues({...values, error: false, loading: true})
    console.log(values)
    if (rol == 'secretary') {
      console.log({email, password})
      secretarysignin({email, password})
      .then(d => {
        if (d.error) {
          setValues({...values, error: d.error, loading: false})
        } else { 
          dispatch(changeUser(d.data))
          authenticate(
            {...d, collegue:collegueState, rol:rol}, () => {
              setValues({
                ...values,
                redirect: true
              })
            }
          )
        }
      })
    }
    if (rol == 'auxiliar') {
      console.log(email)
      auxiliarsignin({email, password})
      .then(d => {
        console.log(d)
        if (d.error) {
          setValues({...values, error: d.error, loading: false})
        } else { 
          dispatch(changeUser(d.data))
          authenticate(
            {...d, collegue:collegueState, rol:rol}, () => {
              setValues({
                ...values,
                redirect: true
              })
            }
          )
        }
      })
    }
  }

  const RedirectUser = () => {
    const linkbyrol = {
      'secretary': '/app/admin/secretary',
      'auxiliar': '/app/admin/auxiliar',
      'supervision': '/app/admin/supervision',
      'secretary': '/app/admin/secretary',
      'secretary': '/app/admin/secretary',
    }
    if ((redirect&&user)|| user) {
      console.log("Redirigiendo a: ", linkbyrol[rol])
      return <Navigate replace to={linkbyrol[rol]}/>
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
      <form className="form-signin" onSubmit={clickSubmit}>
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
          {/* <a onClick={clickSubmit}>
            <ActionButton
              type='primary'
              text='Ingresar'
              collegue={collegueState}
            />
          </a> */}
          <ActionButton
            type='primary'
            text='Ingresar'
            collegue={collegueState}
          />
        </div>
      </form>
      {showError()}
      {showLoading()}
    </div>
  )
}

export default SignIn