import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getSlots, searchAllStudents } from "../../../../../api/secretary.api.js";

import Brand from "../../../../../components/brand/brand.component";
import MainButton from "../../../../../components/buttons/main/main-button.component";
import Profile from "../../../../../components/session/profile/profile.component";
import { List } from "../../../../../components/list/list.component.js";
import { getCollegue, grades } from "../../../../../functions/collegue.function.js";

const Pay = () => {
  const studentsState = useSelector((state) => state.students);

  const [search, setSearch] = useState([]);

  const collegueState = getCollegue()
  const registerState = useSelector(state => state.register)

  
  useEffect(() => {
    searchAllStudents().then(d => {
      setSearch(d)
      console.log(d)
    })
  }, [])

  const listStudents = () => {
    return studentsState
  }

  return (
    <div className="main-container">
      <div className="header">
        <Brand text={collegueState} link="/app/admin/secretary/signin" />
      </div>
      <div className="content">
        <input type="text" placeholder="Search" onChange={(e) => {
          setSearch(e.target.value)
          console.log(search)
          console.log(studentsState)
        }} />
        <List categories={grades()} items={search} action="Nuevo Pago" href="/app/admin/secretary/payments/pay/pension"/>
      </div>
      <Profile />
    </div>
  );
};


export default Pay;
