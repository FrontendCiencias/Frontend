import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { test } from "../../api/test";
import Input from "../../components/input/input.component";

const Test = () => {
  const assistantState = useSelector(state => state.assistant)
  const [ data, setData ] = useState({
    email:'ema@cienciasperu.edu.pe',
    password:'password'
  })

  useEffect(() => {
    test(data).then(a => {
      console.log(a)
      setData(a)
    })
  }, []);

  return (
    <div className="main-container">
      {/* <Input
        type='text'
        id='nombre'
        label='Primer Nombre'
      /> */}
      <p>{data.email}</p>
      <p>{data.address}</p>
    </div>
  );
}

export default Test;