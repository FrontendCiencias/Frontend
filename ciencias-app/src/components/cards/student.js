import React from "react";

import "./student.style.css"

class CardStudent extends React.Component {
  render() {
    console.log(this.props)
  let { url, name1, name2, surname1, surname2, grade } = this.props
  return (
    <div className="card-student">
        <div className="left">
            <img src={url}/>
        </div>
        <div className="right">
            <h1>{name1} {name2}</h1>
            <h2>{surname1} {surname2}</h2>
            <h4>{grade}</h4>
        </div>
    </div>
  )
  }
}

export default CardStudent