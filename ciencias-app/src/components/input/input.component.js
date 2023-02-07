import React from "react";

import "./input.style.css"

class Input extends React.Component {
  render() {
    const { label, id, type} = this.props
    return (
      <div className="input form-box">
        <input id={id} type={type} required/>
        <label>{label}</label>
      </div>
    )
  }
}

export default Input