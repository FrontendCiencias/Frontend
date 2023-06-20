import React, { useState } from "react";


import user_card from "../../../../svg/user-card.svg"
import plus from "../../../../svg/plus.svg"
import { ActionButton } from "../../action/action-button.component";
import Input from "../../../input/input.component";
import { createParents } from "../../../../api/secretary.api";
import { getToken } from "../../../../functions/auth.function";
import { useDispatch } from "react-redux";
import { addParent } from "../../../../features/register/register.slice";
import Select from "../../../select/select.component";

export const CreateParents = (props) => {
  const dispatch = useDispatch()

  const [shown, setShown] = useState(false)
  const [values, setValues] = useState({
    genre: '',
    dni: '',
    address: '',
    phone: '',
    relationship: '',
  })
  const [warning, setWarning] = useState({
    error: false,
    loading: false,
  })
  const { name, type } = props

  const cancel = () => {
    setNames({
      name1: '',
      name2: '',
      surname1: '',
      surname2: '',
    })
    setValues({
      genre: '',
      dni: '',
      address: '',
      phone: '',
      relationship: '',
    })
    setShown(false)
  }

  const clickSubmit = (event) => {
    event.preventDefault()
    setWarning({error: false, loading:true})
    createParents({
      names: names,
      genre:values.genre,
      dni:values.dni,
      address:values.address,
      phone:values.phone,
      relationship:values.relationship
    }).then(d => {
      if (d.error) {
        console.log(d)
        console.log(d.error)
        setWarning({error: d.error, loading: false})
      } else {
        setWarning({error: false, loading: false})
        dispatch(addParent(d))
        setShown(false)
      }
    })
  }

  const showError = () => (
    warning.error &&
    (<div className="error">
      {warning.error}
    </div>)
  )

  const showLoading = () => (
    warning.loading &&
    (<div className="loading">
      Cargando...
    </div>)
  )

  if (type == 'plus') {
    if (shown) {
      return (
        <div className="pop-up-background">
          <div className="pop-up">
            <div className="row">
              
            </div>
            <div className="row">
              <a onClick={cancel}><ActionButton text='Cancelar' type='secondary'/></a>
              <a onClick={clickSubmit}><ActionButton text='Registrar' type='primary'/></a>
            </div>
            <div className="row">
              {showError()}
              {showLoading()}
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