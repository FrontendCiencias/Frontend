import { Link } from "react-router-dom";
import { Background } from "../../../components/background/background.component";
import Brand from "../../../components/brand/brand.component";
import { ActionButton } from "../../../components/buttons/action/action-button.component";
import { getCollegue } from "../../../functions/collegue.function";

import "./landing.style.css"
const Landing = () => {
  
  return (
    <div className="landing">
      <div className="header-landing">
        <Brand text={"Ciencias"} link="./"/>
      </div>
      <div className="content-landing">
        <div>
          <h1>Bienvenidos!</h1>
          <p>Colegios Ciencias y Cimas los mejores de Majes y del Perú jejeje</p>
          <Link to='./app'>
            <ActionButton 
              text='Plataforma Virtual'
              type='primary'
            />
          </Link>
        </div>
        <img src="https://assets.website-files.com/5ed844e06d65e05f9f96a85c/5f18ec35111ee1fe272ca21f_CreceSiempre34-min.png"/>
      </div>
      <div className="footer-landing">
        <h5>© Colegios Ciencias y Cimas 2023</h5>
        <h5>Powered by Dyone</h5>
      </div>
    </div>
  )
}

export default Landing;