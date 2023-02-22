import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSlots } from "../../../api/secretary.api";

import Brand from "../../../components/brand/brand.component"
import { ActionButton } from "../../../components/buttons/action/action-button.component";
import CreateChildren from "../../../components/buttons/create/children/create-children.component";
import CreateParents from "../../../components/buttons/create/parents/create-parents.component";
import Profile from "../../../components/session/profile/profile.component";
import { Slots } from "../../../components/slots/slots.component";
import { formatGrade, getCollegue } from "../../../functions/collegue.function";

import "./register.style.css"

const RegisterSecretary = () => {
  
  const collegueState = getCollegue()
  const registerState = useSelector(state => state.register)

  const [slots, setSlots] = useState([]) 

  useEffect(() => {
    getSlots({
      collegue: `Colegio ${collegueState}`
    }).then(d => {
      setSlots(d)
      console.log(d)
    })
  }, [])

  const listSlots = () => {
    return slots.map((s, i) => {

      return (
        <Slots grade={formatGrade(1,s.grade)} used={s.ocuped} total={s.capacity}/>
      )
    })
  }

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
              {listSlots()}
            </div>
          </div>
          </div>
        <div className="row-2">
          <ActionButton text='Cancelar' type='secondary'/>
          <ActionButton text='Imprimir' type='primary'
          collegue={collegueState}/>
        </div>
      </div>
      <Profile/>
    </div>
  )
}

export default RegisterSecretary