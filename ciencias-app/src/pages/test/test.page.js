import { useSelector } from "react-redux";
import Input from "../../components/input/input.component";
import SignIn from "../../components/signin/signin.component";

function Test() {
  const assistantState = useSelector(state => state.assistant)
  console.log(assistantState)

  return (
    <div className="main-container">
      {/* <Input
        type='text'
        id='nombre'
        label='Primer Nombre'
      /> */}
      <SignIn shown='signin-shown'/>
      {/* <SignIn /> */}
    </div>
  );
}

export default Test;