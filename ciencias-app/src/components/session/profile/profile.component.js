import React from "react";

import user from '../../../svg/user.svg'

import "./profile.style.css"

class SignIn extends React.Component {
  render() {
    const { shown, username } = this.props
    if (shown == 'profile-shown') {
      return (
        <div>
          <div>
            <h4>{username}</h4>
          </div>
          <div>
            <img src={user}/>
          </div>
        </div>
      )
    }
  }
}

export default SignIn