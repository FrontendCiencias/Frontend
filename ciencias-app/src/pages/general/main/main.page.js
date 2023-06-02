import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Background } from "../../../components/background/background.component";
import Brand from "../../../components/brand/brand.component";
import { ActionButton } from "../../../components/buttons/action/action-button.component";
import MainButton from "../../../components/buttons/main/main-button.component";
import { changeCollegue } from "../../../features/collegue/collegue.slice";
import { getCollegue } from "../../../functions/collegue.function";

import "./main.style.css"
const Main = () => {
  const dispatch = useDispatch()

  const [collegue, setCollegues] = useState("none")

  const changeCiencias = () => {
    dispatch(changeCollegue('Ciencias'))
    setCollegues("Ciencias")
  }
  const changeCimas = () => {
    dispatch(changeCollegue('Cimas'))
    setCollegues("Cimas")
  }
  
  return (
    <div className="main-container">
      <div className="secretary-buttons">
        <Link to='./student/signin'>
          <MainButton text='Alumno' collegue={collegue}/>
        </Link>
        <Link to='./teacher/signin'>
          <MainButton text='Docente' collegue={collegue}/>
        </Link>
        <Link to='./admin'>
          <MainButton text='Administrativo' collegue={collegue}/>
        </Link>
      </div>
    </div>
  )
}

export default Main;