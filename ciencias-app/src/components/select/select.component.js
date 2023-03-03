import React from "react";

export const Select = (props) => {
  const { values, setValues, label, id, type, options } = props
  console.log(values)
  const viewOptions = () => {
     return options.map(o => {
        return <option value={o}>{o}</option>
        })
  }
  return (
    <div className="select form-box">
        <label>{label}</label>
      <select
        onChange={(event) => setValues({ ...values, [id]: event.target.value })}
        value={values.id} id={id} type={type} required >
            <option value="select"></option>
        {viewOptions()}
        </select>
    </div>
  )
}

export default Select