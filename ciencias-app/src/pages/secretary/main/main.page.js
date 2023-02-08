import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Brand from "../../../components/brand/brand.component";

import MainButton from "../../../components/buttons/main/main-button.component";

import "./main.style.css"

const MainSecretary = () => {
  const collegueState = useSelector(state => state.collegue)
  return (
    <div className="main-container main-secretary">
      <div className="header">
        <Brand text={collegueState}/>
      </div>
      <div className="buttons">
        <MainButton
          text='Matrículas'
        />
        <MainButton
          text='Matrículas'
        />
        <MainButton
          text='Matrículas'
        />
        <MainButton
          text='Matrículas'
        />
        <MainButton
          text='Matrículas'
        />
        <MainButton
          text='Matrículas'
        />
      </div>
    </div>
  )
}

export default MainSecretary;