import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Brand from "../../../../../../components/brand/brand.component";
import MainButton from "../../../../../../components/buttons/main/main-button.component";
import Profile from "../../../../../../components/session/profile/profile.component";

const IndexPayments = () => {
  const collegueState = useSelector(state => state.collegue)
  return (
    <div className="main-container">
      <div className="header">
        <Brand text={collegueState} link="/app/admin/secretary/signin"/>
      </div>
      <div className="content">
        <Link to='./pay'>
          <MainButton
            text='Realizar pago'
            collegue={collegueState}
          />
        </Link>
        <Link to='./view'>
          <MainButton
            text='Ver pagos'
            collegue={collegueState}
          />
        </Link>
      </div>
      <Profile/>
    </div>
  )
}

export default IndexPayments;