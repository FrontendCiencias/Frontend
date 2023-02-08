import React from "react";
import ActionButton from "../../buttons/action/action-button.component";
import Input from "../../input/input.component";

import "./signin.style.css"

class SignIn extends React.Component {
  render() {
    const { shown } = this.props
    return (
      <div className={`signin ${shown}`}>
          <h2>Hola!</h2>
          <p>Ingresa a tu cuenta</p>
          <form className="form-signin">
            <div className="inputs">
              <Input
                type='text'
                id='email'
                label='E-mail'
              />
              <Input
                type='password'
                id='password'
                label='Contraseña'
              />
            </div>
            <div className="button-submit">
              <ActionButton
                type='primary'
                text='Ingresar'
              />
            </div>
          </form>
      </div>
    )
  }
}

export default SignIn