import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Brand from "../../../../components/brand/brand.component";
import MainButton from "../../../../components/buttons/main/main-button.component";
import Profile from "../../../../components/session/profile/profile.component";

const IndexAuxiliar = () => {
  const collegueState = useSelector(state => state.collegue)
  return (
    <div className="main-container">
      <div className="header">
        <Brand text={collegueState} link="/app/admin/auxiliar"/>
      </div>
      <div className="content">
        <Link to='./califications'>
          <MainButton
            text='Comportamiento'
            collegue={collegueState}
          />
        </Link>
        <Link to='./attendance/normal'>
          <MainButton
            text='Asistencia'
            collegue={collegueState}
          />
        </Link>
        <Link to='./schedule'>
          <MainButton
            text='Horarios'
            collegue={collegueState}
          />
        </Link>
      </div>
      <Profile/>
    </div>
  )
}

export default IndexAuxiliar;