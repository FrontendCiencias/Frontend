import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Brand from "../../../components/brand/brand.component";
import MainButton from "../../../components/buttons/main/main-button.component";
import Profile from "../../../components/session/profile/profile.component";

import "./main.style.css"

const MainSecretary = () => {
  const collegueState = useSelector(state => state.collegue)
  return (
    <div className="main-container main-secretary">
      <div className="header">
        <Brand text={collegueState}/>
      </div>
      <div className="content">
        <Link to='./register'><MainButton
          text='Matrículas'
        /></Link>
        <MainButton
          text='Asistencia'
        />
        <MainButton
          text='Pagos'
        />
        <MainButton
          text='Notas'
        />
        <MainButton
          text='Gestionar'
        />
        <MainButton
          text='Horarios'
        />
      </div>
      <Profile name='Pedro' surname='Bustamante' email='jpostigo@cienciasperu.edu.pe' collegue={collegueState}/>
    </div>
  )
}

export default MainSecretary;