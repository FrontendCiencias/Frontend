import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Brand from "../../../../../components/brand/brand.component";
import MainButton from "../../../../../components/buttons/main/main-button.component";
import Profile from "../../../../../components/session/profile/profile.component";
import { SearchList } from "../../../../../components/list/searchlist.component";
import { ActionButton } from "../../../../../components/buttons/action/action-button.component";
import Input from "../../../../../components/input/input.component";
import { getRol } from "../../../../../functions/auth.function";
import { formatGrade, grades } from "../../../../../functions/collegue.function";
import { useState } from "react";
import { List } from "../../../../../components/list/list.component";
import { studentAttendanceN } from "../../../../../api/auxiliar.api";
import { codeAttendance, codeError } from "../../../../../functions/error.function";
import { searchStudents } from "../../../../../api/secretary.api";
import CardStudent from "../../../../../components/cards/student";

const NormalAttendance = () => {
  const collegueState = useSelector(state => state.collegue)
  
  const [student, setStudent] = useState({
    dni: ""
  });

  //https://i.pinimg.com/originals/69/e5/52/69e552caef1e445eaabffb6f2abfbbbd.jpg
  // para tardanzas xd
  const [laststudent, setLastStudent] = useState({
    state:"",
    name1:"",
    name2:"",
    surname1:"",
    surname2:"",
    grade:""
  });
  const [attended, setAttended] = useState([]);
  const [error, setError] = useState("");

  const clickSubmit = (event) => {
    event.preventDefault()
    console.log("Marcando Asistencia!")
    studentAttendanceN(student)
    .then(d => {
      if (d.error) {
        console.log(d.error)
        setError(codeError(d.error))
        document.getElementById("dni").value = ""
        setStudent({
          dni: ""
        })
        console.log("1")
        setLastStudent({
          state:"E",
          name1:"Oh ñoo",
          name2:"",
          surname1:codeError(d.error),
          surname2:"",
          grade:""
        })
        console.log("2")
      } else {
        console.log(d)
        setError("Asistencia tomada correctamente")
        setLastStudent({
          state:d.state,
          name1:d.names.name1,
          name2:d.names.name2,
          surname1:d.names.surname1,
          surname2:d.names.surname2,
          grade:d.grade
        })
        setStudent({
          dni: ""
        })
        document.getElementById("dni").value = ""
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
        {/* {showError()} */}
        <CardStudent
          state={laststudent.state}
          name1={laststudent.name1}
          name2={laststudent.name2}
          surname1={laststudent.surname1}
          surname2={laststudent.surname2}
          grade={formatGrade(0,laststudent.grade)}
        />
        <List categories={grades()} items={attended}/>
      </div>
      <Profile/>
    </div>
  )
}

export default NormalAttendance;