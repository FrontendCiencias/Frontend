import React from "react";
import { Link } from "react-router-dom";

import "./action-button.style.css"

class ActionButton extends React.Component {
  render() {
    let { text, type } = this.props
    return (
      <div>
        <div className={`action-button ${type}`}>
          <h3>{text}</h3>
        </div>
      </div>
    )
  }
}

export default ActionButton