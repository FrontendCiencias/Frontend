import { Link } from "react-router-dom";
import { formatGrade, formatInverseMonth, formatMonth, getCollegue } from "../../functions/collegue.function";
import { Item } from "../list/item.component";
import './table.style.css'
import { useEffect, useState } from "react";
import { attendanceClassroom } from "../../api/auxiliar.api";
import { useSelector } from "react-redux";
import flecha from "../../svg/flecha.png"

const ItemTable = (props) => {
  const { i, surnames, names, dni, attendances } = props
  const attendance = () => {
    return attendances.map((m,j) => {
      return (
        <td>{m.state}</td>
      )
    })
  }
  return (
    <tr className="items" key={dni}>
      <td>
        {i+1}
      </td>
        <td className='surnames'>
          <Link to={'/app/admin/auxiliar/asistencia/'+dni}>
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
          i={j}
          key={m.student.dni}
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
  const { grade, section, month } = props;
  
  const [list, setList] = useState([]);
  const [mes, setMes] = useState(month);
  
  useEffect(() => {
    // Define una función asincrónica dentro del useEffect para poder usar await
    const fetchData = async () => {
      try {
        const data = await attendanceClassroom({
          grade: grade,
          section: section,
          collegue: "Ciencias Secundaria",
          month: month
        });
        setList(data);
        console.log("useEffect - Data fetched successfully");
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Llama a fetchData() solo cuando cambien grade, section o month
    fetchData();
  }, [grade, section, month]); // Dependencias que hacen que se ejecute el useEffect

  const adelante = (event) => {
    event.preventDefault();

    if (Number(mes)<12) {
      const nextMonth = String(Number(mes) + 1).padStart(2, '0')
      setMes(nextMonth)
      fetchDataForMonth(nextMonth);
    }
  };

  const atras = (event) => {
    event.preventDefault();
    if (Number(mes)>1) {
      const previousMonth = String(Number(mes) - 1).padStart(2, '0');
      setMes(previousMonth)
      fetchDataForMonth(previousMonth);
    }
  };

  const fetchDataForMonth = async (targetMonth) => {
    try {
      const data = await attendanceClassroom({
        grade: grade,
        section: section,
        collegue: "Ciencias Secundaria",
        month: targetMonth
      });
      setList(data);
      console.log("Fetch data for month:", targetMonth);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="v-container">
      <div className="row">
        <button onClick={atras}>
          <img className="atras" src={flecha} alt="atras"/>
        </button>
        <div><h4>{formatGrade(0, grade) + " " + section + " - " + formatInverseMonth(mes)}</h4></div>
      
        <button onClick={adelante}>
          <img className="adelante" src={flecha} alt="adelante"/>
        </button>
      </div>
      <div className="scroll">
        <ListTable list={list} />
      </div>
    </div>
  );
};
