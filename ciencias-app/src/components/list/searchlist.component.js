import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchAllStudents } from "../../api/secretary.api";
import { setStudents } from "../../features/students/students.slice";
import { formatGrade, getCollegue, grades } from "../../functions/collegue.function";
import { Item } from "./item.component"
import { List } from "./list.component";
import './list.style.css'


export const SearchList = (props) => {
  const { action } = props
  
  const [search, setSearch] = useState([]);
  const [list, setList] = useState([]);

  const dispatch = useDispatch()
  
  useEffect(() => {
    searchAllStudents().then(d => {
      dispatch(setStudents(d))
      setList(d)
      console.log(d)
    })
  }, [])
  
  const studentsState = useSelector((state) => state.students);
  
  const filter = (key) => {
    key = key.toLowerCase()
    return studentsState.filter(e => (e.names.name1 + " " + e.names.name2 + " " + e.names.surname1 + " " + e.names.surname2).toLowerCase().includes(key))
  }
  return (
    <div className="v-container">
      <input type="text" placeholder="Search" onChange={(e) => {
          setSearch(e.target.value)
          setList(filter(e.target.value))
          console.log(search)
        }} />
      <div className="scroll">
        <List categories={grades()} items={list} action={action}/>
      </div>
    </div>
  )
}