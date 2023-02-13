import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import user from '../../../svg/user.svg'
import back from '../../../svg/back.svg'

import "./profile.style.css"

export const Profile = () => {
  const [shown, setShown] = useState(false)
  const authState = useSelector(state => state.auth)
  const collegueState = useSelector(state => state.collegue)
  if (shown) {
    return (
      <div className="profile-shown">
        <a onClick={()=>setShown(false)}>
          <div className="back"></div>
        </a>
        <div className="data">
          <a onClick={()=>setShown(false)}>
            <img src={back}/>
          </a>
          <div>
            <img src={user}/>
          </div>
          <div>
            <h4>{`${authState.names.name1} ${authState.names.surname1}`}</h4>
            <p>{authState.email}</p>
            <Link to={"/app/signout"}>
              <div className="signout">Salir</div>
            </Link>
            <h5>Secretaría de {collegueState}</h5>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="profile-notshown">
        <div className="data">
          <div>
            <h4>Secretaría</h4>
          </div>
          <a onClick={()=>setShown(true)}>
            <img src={user}/>
          </a>
        </div>
      </div>
    )
  }
}

export default Profile