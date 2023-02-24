import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createContract, getSlots } from "../../../api/secretary.api";

import Brand from "../../../components/brand/brand.component"
import { ActionButton } from "../../../components/buttons/action/action-button.component";
import CreateChildren from "../../../components/buttons/create/children/create-children.component";
import CreateParents from "../../../components/buttons/create/parents/create-parents.component";
import Profile from "../../../components/session/profile/profile.component";
import { ListSlots } from "../../../components/slots/list-slots.component";
import { Slots } from "../../../components/slots/slots.component";
import { formatGrade, getCollegue } from "../../../functions/collegue.function";

import "./register.style.css"

const RegisterSecretary = () => {
  
  const collegueState = getCollegue()
  const registerState = useSelector(state => state.register)

  const [slots, setSlots] = useState([]) 

  useEffect(() => {
    getSlots({
      collegue: `${collegueState}`
    }).then(d => {
      setSlots(d)
      console.log(d.Inicial)
    })
  }, [])

  const listParents = () => {
    return registerState.parents.map((p, i) => {
      return (
        <CreateParents type='parent' name={p.names.name1} key={p.dni}/>
      )
    })
  }
  const listChildren = () => {
    return registerState.students.map((c, i) => {
      return (
        <CreateChildren type='children' name={c.names.name1} key={c.dni}/>
      )
    })
  }

  const clickSubmit = () => {
    let studentsDNI = []
    registerState.students.forEach((e) => {
      studentsDNI.push(e.dni)
    })
    let tutorsDNI = []
    registerState.parents.forEach((e) => {
      tutorsDNI.push(e.dni)
    })
    console.log({studentsDNI,tutorsDNI})
    createContract({studentsDNI,tutorsDNI})
    .then(d => {
      if (d.error) {
        console.log(d)
      } else {
        localStorage.removeItem('lastContract')
        localStorage.setItem('lastContract', JSON.stringify(registerState));
        window.location.reload(false);
        // window.open("https://frontend-cienciasapp.vercel.app/app/secretary/register/contract","_blank")
      }
    })
  }

  return (
    <div className="main-container register-secretary">
      <div className="header">
        <Brand text={collegueState}/>
      </div>
      <div className="content">
        <div className="row-1">
          <div className="column-1">
            <div className="parents">
              <div className="title">PADRES</div>
              <div className="list">
                {listParents()}
                <CreateParents type='plus'/>
                <div className="void"></div>
              </div>
            </div>
            <div className="children">
              <div className="title">ALUMNOS</div>
              <div className="list">
                {listChildren()}
                <CreateChildren type='plus'/>
                <div className="void"></div>
              </div>
            </div>
          </div>
          <div className="column-2">
            <h3>
              Vacantes en uso:
            </h3>
            <div className="vacancies">
              <ListSlots level="Inicial" vacancies={slots.Inicial}/>
              <ListSlots level="Primaria" vacancies={slots.Primaria}/>
              <ListSlots level="Secundaria" vacancies={slots.Secundaria}/>
            </div>
          </div>
          </div>
        <div className="row-2">
          <Link to="./..">
            <ActionButton text='Cancelar' type='secondary'/>
          </Link>
          <a onClick={clickSubmit} href="./contract" target="_blank"><ActionButton text='Imprimir' type='primary'
          collegue={collegueState}/></a>
        </div>
      </div>
      <Profile/>
    </div>
  )
}

export default RegisterSecretary