import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Brand from "../../../../../../components/brand/brand.component";
import MainButton from "../../../../../../components/buttons/main/main-button.component";
import Profile from "../../../../../../components/session/profile/profile.component";
import { SearchList } from "../../../../../../components/list/searchlist.component";
import { ActionButton } from "../../../../../../components/buttons/action/action-button.component";

const IndexStudentManagement = () => {
  const collegueState = useSelector(state => state.collegue)
  return (
    <div className="main-container">
      <div className="header">
        <Brand text={collegueState} link="/app/admin/secretary"/>
      </div>
      <div className="content">
        <SearchList action="Editar"/>
        <Link to="./create">
          <ActionButton text="Nuevo Alumno" type="primary"/>
        </Link>
      </div>
      <Profile/>
    </div>
  )
}

export default IndexStudentManagement;