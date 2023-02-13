import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import MainButton from "../../../components/buttons/main/main-button.component";
import SignIn from "../../../components/session/signin/signin.component";
import { changeCollegue } from "../../../features/collegue/collegue.slice";

import "./signin.style.css"

const SignInSecretary = () => {
  const dispatch = useDispatch()

  const [collegue, setCollegues] = useState(0)

  const changeCA = () => {
    dispatch(changeCollegue('Ciencias Aplicadas'))
    setCollegues(1)
  }
  const changeCS = () => {
    dispatch(changeCollegue('Ciencias Secundaria'))
    setCollegues(2)
  }
  const changeCC = () => {
    dispatch(changeCollegue('Colegio Cimas'))
    setCollegues(3)
  }

  const buttons = () => {
    switch (collegue) {
      case 1:
        return (
          <div className="main-secretary-shown">
            <div className="secretary-buttons">
              <a onClick={changeCA}>
                <MainButton text='Ciencias Aplicadas' active={1}/>
              </a>
              <a onClick={changeCS}>
                <MainButton text='Ciencias Secundaria' active={0}/>
              </a>
              <a onClick={changeCC}>
                <MainButton text='Colegio Cimas' active={0}/>
              </a>
            </div>
            <SignIn shown='signin-shown'/>
          </div>
        )
        break;

      case 2:
        return (
          <div className="main-secretary-shown">
            <div className="secretary-buttons">
              <a onClick={changeCA}>
                <MainButton text='Ciencias Aplicadas' active={0}/>
              </a>
              <a onClick={changeCS}>
                <MainButton text='Ciencias Secundaria' active={2}/>
              </a>
              <a onClick={changeCC}>
                <MainButton text='Colegio Cimas' active={0}/>
              </a>
            </div>
            <SignIn shown='signin-shown'/>
          </div>
        )
        break;
      
      case 3:
        return (
          <div className="main-secretary-shown">
            <div className="secretary-buttons">
              <a onClick={changeCA}>
                <MainButton text='Ciencias Aplicadas' active={0}/>
              </a>
              <a onClick={changeCS}>
                <MainButton text='Ciencias Secundaria' active={0}/>
              </a>
              <a onClick={changeCC}>
                <MainButton text='Colegio Cimas' active={3}/>
              </a>
            </div>
            <SignIn shown='signin-shown'/>
          </div>
        )
        break;
    
      default:
        return (
          <div className="main-secretary-notshown">
            <div className="secretary-buttons">
              <a onClick={changeCA}>
                <MainButton text='Ciencias Aplicadas' active={0}/>
              </a>
              <a onClick={changeCS}>
                <MainButton text='Ciencias Secundaria' active={0}/>
              </a>
              <a onClick={changeCC}>
                <MainButton text='Colegio Cimas' active={0}/>
              </a>
            </div>
            <SignIn shown='signin-notshown'/>
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

export default SignInSecretary;