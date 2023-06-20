import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Brand from "../../../components/brand/brand.component";
import MainButton from "../../../components/buttons/main/main-button.component";
import Profile from "../../../components/session/profile/profile.component";
import { getRol } from "../../../functions/auth.function";

import "./notfound.style.css"

const NotFound = () => {
  
  const collegueState = useSelector(state => state.collegue)

  const profile = () => {
    if (getRol()!="Invitado") {
      return (
        <Profile/>
      )
    }
  }

  return (
    <div className="main-container">
      <div className="header">
        <Brand text={collegueState} link="/app/admin/secretary/signin"/>
      </div>
      <div className="content">
        <div className="notfound">
          <img src="https://leisureandlux.mx/wp-content/uploads/2022/01/error404-min.png"/>
        </div>
        <h1>Página en proceso :3</h1>
      </div>
      {profile()}
    </div>
  )
}

export default NotFound;