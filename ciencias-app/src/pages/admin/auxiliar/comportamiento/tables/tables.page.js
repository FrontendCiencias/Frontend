import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Brand from "../../../../../components/brand/brand.component";
import Profile from "../../../../../components/session/profile/profile.component";
import { formatSections } from "../../../../../functions/collegue.function";
import { Table } from "../../../../../components/table/table";
import "./tables.style.css"

const TablesAuxiliar = () => {
  let {section} = useParams();
  let m = new Date().getMonth()+1;
  console.log(String(m).padStart(2, '0'))
  console.log("el param es:"+section)
  console.log(formatSections(section)[0]+formatSections(section)[1])
  const collegueState = useSelector(state => state.collegue)
  return (
    <div className="main-container">
      <div className="header">
        <Brand text={collegueState} link="/app/admin/auxiliar"/>
      </div>
      <div className="content">
        <Table grade={formatSections(section)[0]} section={formatSections(section)[1]} month={String(m).padStart(2, '0')}/>
      </div>
      <Profile/>
    </div>
  )
}

export default TablesAuxiliar;