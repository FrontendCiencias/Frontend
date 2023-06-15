import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { searchAllStudents } from "../../api/secretary.api";
import { formatGrade, getCollegue, grades } from "../../functions/collegue.function";
import { Item } from "./item.component"
import { List } from "./list.component";
import './list.style.css'


export const SearchList = (props) => {
  const { action } = props
  const studentsState = useSelector((state) => state.students);

  const [search, setSearch] = useState([]);
  const [list, setList] = useState([]);

  const collegueState = getCollegue()
  const registerState = useSelector(state => state.register)

  
  useEffect(() => {
    searchAllStudents().then(d => {
      setList(d)
      console.log(d)
    })
  }, [])

  const listStudents = () => {
    return studentsState
  }
  return (
    <div>
      <input type="text" placeholder="Search" onChange={(e) => {
          setSearch(e.target.value)
          console.log(search)
          console.log(studentsState)
        }} />
      <List categories={grades()} items={list} action={action} href="/app/admin/secretary/payments/pay/pension"/>
    </div>
  )
}