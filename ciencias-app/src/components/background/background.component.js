import React from "react";
import { useSelector } from "react-redux";

import "./background.style.css"

export const Background = () => {
  const collegue = useSelector(state => state.collegue)
  return (
    <div className={`background ${collegue}-color`}>
      <div className={`background-container ligth-${collegue}-color shadow-${collegue}-color`}></div>
      <div className='dyone-stamp'><h5>powered by</h5> <h3>Dyone</h3></div>
    </div>
  )
}