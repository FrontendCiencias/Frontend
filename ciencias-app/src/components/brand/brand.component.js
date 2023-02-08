import React from "react";
import { Link } from "react-router-dom";

import logo from '../../svg/logo.svg'

import "./brand.style.css"

class Brand extends React.Component {
  render() {
    let { text } = this.props
    return (
      <Link to='../ciencias-aplicadas/secretary'>
        <div className='brand'>
          <img src={logo}/>
          <h3>{text}</h3>
        </div>
      </Link>
    )
  }
}

export default Brand