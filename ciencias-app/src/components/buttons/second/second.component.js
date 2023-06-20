import React from "react";

import "./second.style.css"

import logo from "../../../svg/logo.svg"

class Second extends React.Component {
  render() {
    let { text, collegue } = this.props
    let classname = ""

    return (
      <div className={`second shadow-${collegue}-color`}>
        <div className="right">
          <h3>{text}</h3>
        </div>
      </div>
    )
  }
}

export default Second