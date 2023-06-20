import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Brand from "../../../../../../components/brand/brand.component";
import MainButton from "../../../../../../components/buttons/main/main-button.component";
import Profile from "../../../../../../components/session/profile/profile.component";
import { SearchList } from "../../../../../../components/list/searchlist.component";
import { ActionButton } from "../../../../../../components/buttons/action/action-button.component";

const IndexPay = () => {
  const collegueState = useSelector(state => state.collegue)
  return (
    <div className="main-container main-secretary">
      <div className="header">
        <Brand text={collegueState} link="/app/admin/secretary/signin"/>
      </div>
      <div className="content">
        <Link to='./pension'>
          <MainButton
            text='Pension'
            collegue={collegueState}
          />
        </Link>
        <MainButton
          text='Der. Ingreso'
          collegue={collegueState}
        />
        <MainButton
          text='Matrícula'
          collegue={collegueState}
        />
        <MainButton
          text='Libros'
          collegue={collegueState}
        />
        <MainButton
          text='Agendas'
          collegue={collegueState}
        />
      </div>
      <Profile/>
    </div>
  )
}

export default IndexPay;