import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./action-button.style.css"

export const ActionButton = (props) => {
  const collegue = useSelector(state => state.collegue)
  let { text, type, size } = props
  let classname = ""
  type=="primary" ? classname = `action-button ${type} heavy-${collegue}-color` : classname = `action-button ${type}`
  size == "small" ? classname = classname + " small" : classname = classname + " normal"
  return (
    <button type="submit" className={classname}>
        <h3>{text}</h3>
    </button>
  )
}