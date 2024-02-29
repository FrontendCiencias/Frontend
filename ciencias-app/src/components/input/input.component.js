import React from "react";

import "./input.style.css"

export const Input = (props) => {
  const { values, setValues, label, id, type, focus } = props
  if (focus) {return (
    <div className="input form-box">
      <input
        autoFocus
        onChange={(event) => {
          console.log(values)
          if (event.key == 'Enter') {
            setValues({ ...values, [id]: event.target.value, submit: true })
          } else {
            setValues({ ...values, [id]: event.target.value })
          }
        }}
        value={values[id]} id={id} type={type} required />
      <label>{label}</label>
    </div>
  )
  }
  // console.log(values)
  return (
    <div className="input form-box">
      <input
        autoFocus
        onChange={(event) => {
          console.log(values)
          if (event.key == 'Enter') {
            setValues({ ...values, [id]: event.target.value, submit: true })
          } else {
            setValues({ ...values, [id]: event.target.value })
          }
        }}
        value={values[id]} id={id} type={type} required />
      <label>{label}</label>
    </div>
  )
}

export default Input