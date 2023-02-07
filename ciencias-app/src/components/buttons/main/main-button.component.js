import React from "react";

import "./main-button.style.css"

import logo from "../../../svg/logo.svg"

class MainButton extends React.Component {
  render() {
    let { text, active } = this.props
    active!=1 && active!=2 && active!=3 ? active=0 : active=active
    return (
      <div className={`main-button color-${active}`}>
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