import { useSelector } from "react-redux";
import Background from "../../components/background/background.component";
import MainButton from "../../components/buttons/main/main-button.component";

function Test() {
  const assistantState = useSelector(state => state.assistant)
  console.log(assistantState)

  return (
    <div>
      Hola
      <MainButton text='Ciencias Aplicadas'/>
      <MainButton text='Ciencias'/>
      <MainButton text='Cimas'/>
    </div>
  );
}

export default Test;