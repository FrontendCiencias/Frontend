import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Brand from "../../../../../components/brand/brand.component";
import MainButton from "../../../../../components/buttons/main/main-button.component";
import Profile from "../../../../../components/session/profile/profile.component";
import { useEffect, useState } from "react";
import Second from "../../../../../components/buttons/second/second.component";

import "./index.style.css"
import { ActionButton } from "../../../../../components/buttons/action/action-button.component";
import { createAttendanceN, getTodayAttendanceN } from "../../../../../api/auxiliar.api";

const IndexAttendance = () => {
  const collegueState = useSelector(state => state.collegue)
  
  const [attendanceN, setAttendanceN] = useState([]);
  const [attendanceE, setAttendanceE] = useState([]);

  // console.log(attendanceN.length)
  
  useEffect(() => {
    getTodayAttendanceN().then(d => {
      console.log(d)
      if (d.error) {
        console.log(d.error)
      } else {
        setAttendanceN(d)
      }
    })
    // sad().then(d => {
    //   setAttendanceE(d)
    //   console.log(d)
    // })
  }, [])

  const clickSubmitN = (event) => {
    event.preventDefault()
    createAttendanceN().then(d => {
      if (d.error) {
        console.log(d.error)
      } else {
        setAttendanceN(d)
      }
    })
  }

  const clickSubmitE = (event) => {
    event.preventDefault()
    // createAttendanceN().then(d => {

    // })
  }

  const normal = () => {
    if (attendanceN.length==0) {
      return (
        <a onClick={clickSubmitN}>
          <Second
            text='+'
            collegue={collegueState}
          />
        </a>
      )
    } else {
      return (
        <Link to="./normal">
          <Second
            text='Actual'
            collegue={collegueState}
          />
        </Link>
      )
    }
  }

  const listEspecial = () => {
    return attendanceE.map((c, i) => {
      return (
        <Second
          text={c.description}
          collegue={collegueState}
        />
      )
    })
  }

  const especial = () => {
      return (
        <a onClick={clickSubmitE}>
          <Second
            text='+'
            collegue={collegueState}
          />
        </a>
      )
  }

  return (
    <div className="main-container">
      <div className="header">
        <Brand text={collegueState} link="/app/admin/auxiliar"/>
      </div>
      <div className="content">
        <div className="h-container attendance-title">
          <h1>Asistencia Normal:</h1>
        </div>
        <div className="h-container">
          {normal()}
        </div>
        <div className="h-container attendance-title">
          <h1>Asistencia Especial:</h1>
        </div>
        <div className="h-container">
          {listEspecial()}
          {especial()}
        </div>
      </div>
      <Profile/>
    </div>
  )
}

export default IndexAttendance;