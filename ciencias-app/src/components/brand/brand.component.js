import React from "react";
import { Link } from "react-router-dom";

import logo from '../../svg/logo.svg'

import "./brand.style.css"

class Brand extends React.Component {
  render() {
    let { text, link } = this.props
    return (
      <Link to={link}>
        <div className='brand'>
          <img src={logo}/>
          <h3>Colegio {text}</h3>
        </div>
      </Link>
    )
  }
}

export default Brand