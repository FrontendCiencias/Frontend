import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getSlots, searchAllStudents } from "../../../../api/secretary.api.js";

import Brand from "../../../../components/brand/brand.component";
import MainButton from "../../../../components/buttons/main/main-button.component";
import Profile from "../../../../components/session/profile/profile.component";
import { List } from "../../../../components/list/list.component.js";
import { getCollegue, grades } from "../../../../functions/collegue.function.js";
import { SearchList } from "../../../../components/list/searchlist.component.js";
import { Table } from "../../../../components/table/table.js";

const Comportamiento = () => {

  const [search, setSearch] = useState([]);

  const collegueState = getCollegue()

  return (
    <div className="main-container">
      <div className="header">
        <Brand text={collegueState} link="/app/admin/secretary/signin" />
      </div>
      <div className="content">
        <div className="row">
          <Link to='./1A'>
            <MainButton
              text='1A'
              collegue={collegueState}
              />
          </Link>
          <Link to='./1E'>
            <MainButton
              text='1E'
              collegue={collegueState}
              />
          </Link>
        </div>
        <div className="row">
          <Link to='./2A'>
            <MainButton
              text='2A'
              collegue={collegueState}
              />
          </Link>
          <Link to='./2E'>
            <MainButton
              text='2E'
              collegue={collegueState}
              />
          </Link>
        </div>
        <div className="row">
          <Link to='./3A'>
            <MainButton
              text='3A'
              collegue={collegueState}
              />
          </Link>
          <Link to='./3B'>
            <MainButton
              text='3B'
              collegue={collegueState}
              />
          </Link>
          <Link to='./3E'>
            <MainButton
              text='3E'
              collegue={collegueState}
              />
          </Link>
        </div>
        <div className="row">
          <Link to='./4A'>
            <MainButton
              text='4A'
              collegue={collegueState}
              />
          </Link>
          <Link to='./4B'>
            <MainButton
              text='4B'
              collegue={collegueState}
              />
          </Link>
          <Link to='./4E'>
            <MainButton
              text='4E'
              collegue={collegueState}
              />
          </Link>
        </div>
        <div className="row">
          <Link to='./5A'>
            <MainButton
              text='5A'
              collegue={collegueState}
              />
          </Link>
          <Link to='./5B'>
            <MainButton
              text='5B'
              collegue={collegueState}
              />
          </Link>
          <Link to='./5E'>
            <MainButton
              text='5E'
              collegue={collegueState}
              />
          </Link>
        </div>
        {/* <Table grade="1ro_secundaria" section="A" month="04"/> */}
      </div>
      <Profile />
    </div>
  );
};


export default Comportamiento;
