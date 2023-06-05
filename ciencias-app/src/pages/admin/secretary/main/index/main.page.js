import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Brand from "../../../../../components/brand/brand.component";
import MainButton from "../../../../../components/buttons/main/main-button.component";
import Profile from "../../../../../components/session/profile/profile.component";

import "./main.style.css"

const MainSecretary = () => {
  const collegueState = useSelector(state => state.collegue)
  return (
    <div className="main-container main-secretary">
      <div className="header">
        <Brand text={collegueState} link="/app/admin/secretary/signin"/>
      </div>
      <div className="content">
        <Link to='./payments'>
          <MainButton
            text='Pagos'
            collegue={collegueState}
          />
        </Link>
        <Link to='./management'>
          <MainButton
            text='Gestion'
            collegue={collegueState}
          />
        </Link>
        <MainButton
          text='Horarios'
          collegue={collegueState}
        />
      </div>
      <Profile/>
    </div>
  )
}

export default MainSecretary;