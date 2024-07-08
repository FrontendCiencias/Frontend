import { Link } from "react-router-dom";
import { formatGrade, getCollegue } from "../../functions/collegue.function";
import { Item } from "../list/item.component";
import './table.style.css'
import { useEffect, useState } from "react";
import { attendanceClassroom } from "../../api/auxiliar.api";
import { useSelector } from "react-redux";

const ItemTable = (props) => {
  const { surnames, names, dni, attendances } = props
  const attendance = () => {
    return attendances.map((m,j) => {
      return (
        <td>{m.state}</td>
      )
    })
  }
  return (
    <tr className="items" key={dni}>
        <td className='surnames'>
          <Link to={'/app/admin/auxiliar/califications/'+dni}>
            {surnames+", "+names}  
          </Link>
        </td>
        {attendance()}
      {/* <td className='action'>
        <Link to={'/app/admin/secretary/management/student/image/'+dni}>
          <ActionButton
            text={'I'}
            type="primary"
            size="small"
            />
        </Link>
      </td> */} 
    </tr>
  )
}

const ListTable = (props) => {
  const categoryList = () => {
    const {list} = props;
    return list.map((m,j) => {
      let nombre = m.student.names 
      return (
        <ItemTable
          k={m.student.dni}
          surnames={nombre.surname1 + " " + nombre.surname2}
          names={nombre.name1 + " " + nombre.name2}
          dni={m.student.dni}
          attendances={m.attendances}
        />
      )
    })
  }
  return (
    <table className="list">
      <tbody className="items">{categoryList()}</tbody>
    </table>
  )
}


export const Table = (props) => {
  const { grade, section, month } = props
  
  const [list, setList] = useState([]);
  
  useEffect(() => {
    attendanceClassroom({
      grade: grade,
      section: section,
      collegue: "Ciencias Secundaria",
      month: month
    }).then(d => {
      setList(d)
      console.log(getCollegue())
      console.log(d)
    })
  }, [])
  
  const studentsState = useSelector((state) => state.students);
  
  return (
    <div className="v-container">
      <div><h4>{grade+" "+section+" - "+month}</h4></div>
      <div className="scroll">
        <ListTable list={list} />
      </div>
    </div>
  )
}