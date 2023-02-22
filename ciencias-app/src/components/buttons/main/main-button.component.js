import React from "react";

import "./main-button.style.css"

import logo from "../../../svg/logo.svg"

class MainButton extends React.Component {
  render() {
    let { text, collegue, selected } = this.props
    let classname = ""
    selected ? classname = `main-button selected-${collegue}-color` : classname = `main-button shadow-${collegue}-color`
    return (
      <div className={classname}>
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