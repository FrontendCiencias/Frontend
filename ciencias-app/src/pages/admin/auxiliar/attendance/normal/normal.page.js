import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Brand from "../../../../../components/brand/brand.component";
import MainButton from "../../../../../components/buttons/main/main-button.component";
import Profile from "../../../../../components/session/profile/profile.component";
import { SearchList } from "../../../../../components/list/searchlist.component";
import { ActionButton } from "../../../../../components/buttons/action/action-button.component";
import Input from "../../../../../components/input/input.component";
import { getRol } from "../../../../../functions/auth.function";
import { grades } from "../../../../../functions/collegue.function";
import { useState } from "react";
import { List } from "../../../../../components/list/list.component";
import { studentAttendanceN } from "../../../../../api/auxiliar.api";
import { codeError } from "../../../../../functions/error.function";
import { searchStudents } from "../../../../../api/secretary.api";

const NormalAttendance = () => {
  const collegueState = useSelector(state => state.collegue)
  
  const [student, setStudent] = useState({
    dni: ""
  });
  const [attended, setAttended] = useState([]);
  const [error, setError] = useState("");

  const clickSubmit = (event) => {
    event.preventDefault()
    console.log("Asistencia Marcada!")
    studentAttendanceN(student)
    .then(d => {
      if (d.error) {
        console.log(d.error)
        setError(codeError(d.error))
        setStudent({
          dni: ""
        })
        document.getElementById("dni").value = ""
      } else {
        setError("Asistencia tomada correctamente")
        setStudent({
          dni: ""
        })
      }
    })
  }

  const showError = () => (
    error &&
    (<div className="error">
      {error}
    </div>)
  )

  return (
    <div className="main-container">
      <div className="header">
        <Brand text={collegueState} link={`/app/admin/${getRol()}`}/>
      </div>
      <div className="content">
        <form className="h-container" onSubmit={clickSubmit}>
          <Input
            focus={true}
            values={student}
            setValues={setStudent}
            type='number'
            id='dni'
            label='DNI'
          />
          <ActionButton
            type='primary'
            text='Asistió'
            size='small'
            collegue={collegueState}
          />
        </form>
        {showError()}
        <List categories={grades()} items={attended}/>
      </div>
      <Profile/>
    </div>
  )
}

export default NormalAttendance;