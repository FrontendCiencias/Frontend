import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createContract, getSlots } from "../../../api/secretary.api";

import plus from "../../../svg/plus.svg";

import Brand from "../../../components/brand/brand.component"
import { ActionButton } from "../../../components/buttons/action/action-button.component";
import CreateChildren from "../../../components/buttons/create/children/create-children.component";
import CreateParents from "../../../components/buttons/create/parents/create-parents.component";
import Profile from "../../../components/session/profile/profile.component";
import { ListSlots } from "../../../components/slots/list-slots.component";
import { Slots } from "../../../components/slots/slots.component";
import { formatGrade, getCollegue } from "../../../functions/collegue.function";

import "./register.style.css"
import SearchParents from "../../../components/buttons/search/parents/searchParents.component";
import SearchChildren from "../../../components/buttons/search/children/searchChildren.component";
import MainButton from "../../../components/buttons/main/main-button.component";

const RegisterSecretary = () => {
  
  const collegueState = getCollegue()

  return (
    <div className="main-container register-secretary">
      <div className="header">
        <Brand text={collegueState}/>
      </div>
      <div className="content">
        <Link to='./student'>
          <MainButton
            text='Crear Estudiante'
            collegue={collegueState}
          />
        </Link>
        <Link to='./parent'>
          <MainButton
            text='Crear Padre'
            collegue={collegueState}
          />
        </Link>
        <Link to='./contract'>
          <MainButton
            text='Crear Contrato'
            collegue={collegueState}
          />
        </Link>
        <Link to='./teacher'>
          <MainButton
            text='Crear Profesor'
            collegue={collegueState}
          />
        </Link>
      </div>
      <Profile/>
    </div>
  )
}

export default RegisterSecretary