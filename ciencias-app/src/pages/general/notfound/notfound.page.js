import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Brand from "../../../components/brand/brand.component";
import MainButton from "../../../components/buttons/main/main-button.component";
import Profile from "../../../components/session/profile/profile.component";

import "./notfound.style.css"

const NotFound = () => {
  
  const collegueState = useSelector(state => state.collegue)
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
      <Profile/>
    </div>
  )
}

export default NotFound;