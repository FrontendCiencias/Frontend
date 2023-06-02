import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Background } from "../../../components/background/background.component";
import Brand from "../../../components/brand/brand.component";
import { ActionButton } from "../../../components/buttons/action/action-button.component";
import MainButton from "../../../components/buttons/main/main-button.component";
import { changeCollegue } from "../../../features/collegue/collegue.slice";
import { getCollegue } from "../../../functions/collegue.function";

const MainAdmin = () => {
  
  const collegueState = useSelector(state => state.collegue)
  
  return (
    <div className="main-container">
      <div className="secretary-buttons">
        <Link to='./secretary/signin'>
          <MainButton text='Secretaría' collegue={collegueState}/>
        </Link>
        <Link to='./auxiliar/signin'>
          <MainButton text='Auxiliar' collegue={collegueState}/>
        </Link>
      </div>
    </div>
  )
}

export default MainAdmin;