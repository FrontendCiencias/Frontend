import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { searchAllStudents } from "../../../../../../api/secretary.api.js";

import Brand from "../../../../../../components/brand/brand.component";
import MainButton from "../../../../../../components/buttons/main/main-button.component";
import Profile from "../../../../../../components/session/profile/profile.component";

const Pay = () => {
  const collegueState = useSelector((state) => state.collegue);
  const studentsState = useSelector((state) => state.students);

  const [search, setSearch] = useState([]);

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
        <p>{listStudents()}</p>
      </div>
      <Profile />
    </div>
  );
};


export default Pay;
