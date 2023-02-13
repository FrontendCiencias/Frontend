import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { test } from "../../api/test";
import Input from "../../components/input/input.component";
import Profile from "../../components/session/profile/profile.component";
import { authenticate } from "../../functions/auth.function";

import './test.style.css'

const Test = () => {
  const assistantState = useSelector(state => state.assistant)
  const [ data, setData ] = useState({
    email:'ema@cienciasperu.edu.pe',
    password:'password',
    name: '',
    surname: '',
  })


  useEffect(() => {
    test(data).then(a => {
      console.log(a)
      authenticate(a, () => {
        setData({...data,name:a.names.name1,surname:a.names.surname1})
      })
      console.log(data)
    })
  }, []);

  return (
    <div className="main-container">
      <div className="test-container">
        {/* <Input
          type='text'
          id='nombre'
          label='Primer Nombre'
        /> */}
        <p>{data.email}</p>
        <p>{data.address}</p>
        {/* <Profile name={data.name} surname={data.surname} email={data.email}/> */}
      </div>
    </div>
  );
}

export default Test;