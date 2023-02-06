import MainButton from "../../components/buttons/main/main-button.component";

import "./main-secretary.style.css"

const MainSecretary = () => {
  return (
    <div className="main-container main-secretary">
      <div className="secretary-buttons">
        <MainButton text='Ciencias Aplicadas'/>
        <MainButton text='Ciencias Aplicadas'/>
        <MainButton text='Ciencias Aplicadas'/>
      </div>
    </div>
  )
}

export default MainSecretary;