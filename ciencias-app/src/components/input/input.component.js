import React from "react";

import "./input.style.css"

export const Input = (props) => {
  const { values, setValues, label, id, type} = props
  return (
    <div className="input form-box">
      <input onChange={(event)=>{
        setValues({...values, error: false, [id]: event.target.value})
      }} value={values.id} id={id} type={type} required/>
      <label>{label}</label>
    </div>
  )
}

export default Input