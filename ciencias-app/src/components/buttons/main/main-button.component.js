import React from "react";

import "./main-button.style.css"

import logo from "../../../svg/logo.svg"

class MainButton extends React.Component {
  render() {
    const {text} = this.props
    return (
      <div className="main-button">
        <div className="left">
          <img src={logo}/>
        </div>
        <div className="right">
          <h3>{text}</h3>
        </div>
      </div>
    )
  }
}

export default MainButton