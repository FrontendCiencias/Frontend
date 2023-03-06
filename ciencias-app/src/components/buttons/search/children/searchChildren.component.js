import React, { useState } from "react";

import user_card from "../../../../svg/user-card.svg"
import plus from "../../../../svg/plus.svg"
import { ActionButton } from "../../action/action-button.component";
import Input from "../../../input/input.component";
import { createParents, searchParents, searchStudents } from "../../../../api/secretary.api";
import { useDispatch } from "react-redux";
import { addParent, addStudent } from "../../../../features/register/register.slice";
import Select from "../../../select/select.component";

export const SearchChildren = (props) => {
  const dispatch = useDispatch()

  const [shown, setShown] = useState(false)
  const [values, setValues] = useState({
    dni: "",
  })
  const [warning, setWarning] = useState({
    error: false,
    loading: false,
  })

  const cancel = () => {
    setValues({
      dni: '',
    })
    setWarning({
      error: false,
      loading: false,
    })
    setShown(false)
  }

  const clickSubmit = (event) => {
    event.preventDefault()
    setWarning({error: false, loading:true})
    searchStudents({
      dni: values.dni,
    }).then(d => {
      if (d.error) {
        console.log(d)
        console.log(d.error)
        setWarning({error: d.error, loading: false})
      } else {
        setWarning({error: false, loading: false})
        dispatch(addStudent(d))
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

    if (shown) {
      return (
        <div className="pop-up-background">
          <div className="pop-up-search">
            <div className="row">Buscar a un padre por su DNI:</div>
            <div className="row">
              <Input
                values={values}
                setValues={setValues}
                type='text'
                label='DNI'
                id='dni'
              />
            
            </div>
            <div className="row">
              <a onClick={cancel}><ActionButton text='Cancelar' type='secondary'/></a>
              <a onClick={clickSubmit}><ActionButton text='Buscar' type='primary'/></a>
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
          <div className={`search-button`}>
            <img src={plus}/>
          </div>
        </a>
      )
    }
}

export default SearchChildren