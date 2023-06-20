import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import MainButton from "../../../../components/buttons/main/main-button.component";
import SignIn from "../../../../components/session/signin/signin.component";
import { changeCollegue } from "../../../../features/collegue/collegue.slice";


// import "./signin.style.css"

const SignInAuxiliar = () => {
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

  const buttons = () => {
    switch (collegue) {
      case "Ciencias":
        return (
          <div className="main-secretary-shown">
            <div className="secretary-buttons">
              <a onClick={changeCiencias}>
                <MainButton text='Colegio Ciencias' selected={true} collegue={collegue}/>
              </a>
              <a onClick={changeCimas}>
                <MainButton text='Colegio Cimas' selected={false} collegue={collegue}/>
              </a>
            </div>
            <SignIn shown='signin-shown' rol='auxiliar'/>
          </div>
        )
        break;

      case "Cimas":
        return (
          <div className="main-secretary-shown">
            <div className="secretary-buttons">
              <a onClick={changeCiencias}>
                <MainButton text='Colegio Ciencias' selected={false} collegue={collegue}/>
              </a>
              <a onClick={changeCimas}>
                <MainButton text='Colegio Cimas' selected={true} collegue={collegue}/>
              </a>
            </div>
            <SignIn shown='signin-shown' rol='auxiliar'/>
          </div>
        )
        break;
    
      default:
        return (
          <div className="main-secretary-notshown">
            <div className="secretary-buttons">
              <a onClick={changeCiencias}>
                <MainButton text='Colegio Ciencias' selected={false} collegue={collegue}/>
              </a>
              <a onClick={changeCimas}>
                <MainButton text='Colegio Cimas' selected={false} collegue={collegue}/>
              </a>
            </div>
            <SignIn shown='signin-notshown' rol='auxiliar'/>
          </div>
        )
        break;
    }
  }

  return (
    <div className="main-container main-secretary">
      {buttons()}
    </div>
  )
}

export default SignInAuxiliar;