import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./pay.style.css"

import { getSlots, searchAllStudents, searchStudents } from "../../../../../../api/secretary.api.js";

import Brand from "../../../../../../components/brand/brand.component";
import MainButton from "../../../../../../components/buttons/main/main-button.component";
import Profile from "../../../../../../components/session/profile/profile.component";
import { List } from "../../../../../../components/list/list.component.js";
import { getCollegue, grades } from "../../../../../../functions/collegue.function.js";
import { SearchList } from "../../../../../../components/list/searchlist.component.js";

const PayPensionByID = () => {

  const [student, setStudent] = useState([]);
  const { id } = useParams();

  const collegueState = getCollegue()
  const registerState = useSelector(state => state.register)

  
  useEffect(() => {
    // searchStudents().then(d => {
    //   setSearch(d)
    //   console.log(d)
    // })
  }, [])
  
  return (
    <div className="main-container">
      {/* <div className="header">
        <Brand text={collegueState} link="/app/admin/secretary/signin" />
      </div>
      <div className="content">
        <SearchList action="Nuevo Pago" link="/app/admin/secretary/payments/pay/pension"/>
      </div>
      <Profile /> */}
    </div>
  );
};


export default PayPensionByID;
