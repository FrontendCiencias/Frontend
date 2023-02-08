import React from "react";
import { Link } from "react-router-dom";

import "./action-button.style.css"

class ActionButton extends React.Component {
  render() {
    let { text, type, url } = this.props
    return (
      <Link to='../app/secretary'>
        <div className={`action-button ${type}`}>
          <h3>{text}</h3>
        </div>
      </Link>
    )
  }
}

export default ActionButton