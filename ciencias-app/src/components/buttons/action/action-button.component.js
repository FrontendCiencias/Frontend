import React from "react";

import "./action-button.style.css"

class ActionButton extends React.Component {
  render() {
    let { text, type } = this.props
    return (
      <a className={`action-button ${type}`}>
        <h3>{text}</h3>
      </a>
    )
  }
}

export default ActionButton