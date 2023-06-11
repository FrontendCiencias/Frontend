import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Brand from "../../../../../components/brand/brand.component";
import MainButton from "../../../../../components/buttons/main/main-button.component";
import Profile from "../../../../../components/session/profile/profile.component";

const IndexManagement = () => {
  const collegueState = useSelector(state => state.collegue)
  return (
    <div className="main-container">
      <div className="header">
        <Brand text={collegueState} link="/app/admin/secretary"/>
      </div>
      <div className="content">
        <Link to='./student'>
          <MainButton
            text='Alumnos'
            collegue={collegueState}
          />
        </Link>
        <Link to='./parent'>
          <MainButton
            text='Padres'
            collegue={collegueState}
          />
        </Link>
        <Link to='./teacher'>
          <MainButton
            text='Profesores'
            collegue={collegueState}
          />
        </Link>
      </div>
      <Profile/>
    </div>
  )
}

export default IndexManagement;