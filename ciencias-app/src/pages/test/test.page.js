import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { test } from "../../api/test";
import Input from "../../components/input/input.component";
import Profile from "../../components/session/profile/profile.component";
import { authenticate } from "../../functions/auth.function";

import './test.style.css'
import CardStudent from "../../components/cards/student";

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
      <CardStudent
        url="https://e7.pngegg.com/pngimages/867/212/png-clipart-tweety-bird-thumbnail.png"
        name1="José"
        name2="Roberto Carlos"
        surname1="Rodriguez"
        surname2="De la Torreja"
        grade="Primero de Cuarto"
      />
    </div>
  );
}

export default Test;