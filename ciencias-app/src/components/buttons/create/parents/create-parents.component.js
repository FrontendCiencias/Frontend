import React, { useState } from "react";

import "./create-parents.style.css"

import user_card from "../../../../svg/user-card.svg"
import plus from "../../../../svg/plus.svg"
import ActionButton from "../../action/action-button.component";
import Input from "../../../input/input.component";

export const CreateParents = (props) => {
  const [shown, setShown] = useState(false)
  const [names, setNames] = useState({
    name1: '',
    name2: '',
    surname1: '',
    surname2: '',
  })
  const [values, setValues] = useState({
    genre: '',
    dni: '',
    address: '',
    phone: '',
    relationship: '',
  })
  const { name, type } = props

  if (type == 'plus') {
    if (shown) {
      return (
        <div className="pop-up-background">
          <div className="pop-up">
            <div className="row">
              <Input
                values={names}
                setValues={setNames}
                type='text'
                label='Primer Nombre'
                id='name1'
              />
              <Input
                values={names}
                setValues={setNames}
                type='text'
                label='Segundo Nombre'
                id='name2'
              />
            </div>
            <div className="row">
              <Input
                values={names}
                setValues={setNames}
                type='text'
                label='Primer Apellido'
                id='surname1'
              />
              <Input
                values={names}
                setValues={setNames}
                type='text'
                label='Segundo Apellido'
                id='surname2'
              />
            </div>
            <div className="row">
              <Input
                values={values}
                setValues={setValues}
                type='text'
                label='Dirección'
                id='address'
              />
            </div>
            <div className="row">
              <Input
                values={values}
                setValues={setValues}
                type='text'
                label='Género'
                id='genre'
              />
              <Input
                values={values}
                setValues={setValues}
                type='text'
                label='Parentezco'
                id='relationship'
              />
            </div>
            <div className="row">
              <Input
                values={values}
                setValues={setValues}
                type='text'
                label='Número de Celular'
                id='phone'
              />
              <Input
                values={values}
                setValues={setValues}
                type='text'
                label='Número de DNI'
                id='dni'
              />
            </div>
            <div className="row">
              <a onClick={()=>setShown(false)}><ActionButton text='Cancelar' type='secondary'/></a>
              <ActionButton text='Registrar' type='primary'/>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <a onClick={()=>setShown(true)}>
          <div className={`profile-button`}>
            <img src={plus}/>
          </div>
        </a>
      )
    }
  } else {
    if (shown) {

    } else {
      return (
        <div className={`profile-button`}>
          <img className="img" src={user_card}/>
          <h4>{name}</h4>
        </div>
      )
    }
  }
}

export default CreateParents