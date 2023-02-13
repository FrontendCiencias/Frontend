import { useDispatch, useSelector } from "react-redux";

import cimas from '../../../svg/cimas.jpg'
import ciencias from '../../../svg/ciencias.jpg'

import './contract.style.css'

const Contract = () => {
  const registerState = useSelector(state => state.register)
  const collegueState = useSelector(state => state.collegue)
  console.log(registerState)
  console.log(collegueState)
  return (
    <div className="contract-container">
      <div className="line main">
        <img src={cimas}/>
        <h2>CONTRATO DE PENSIONES DE ESTUDIOS - 2023</h2>
        <img src={ciencias}/>
      </div>
      <div className="line">
        <p>Conste el presente CONTRATO DE PRESTACIÓN DE SERVICIOS ESCOLARES - AÑO 2023, que suscriben de una parte la I.E.P. CIMAS con RUC Nº 10068110454, con domicilio en la Av. Los Colonizadores Parcela 191 -1 Villa el Pedregal Majes, debidamente representado por su gerente Mg. Juan Mesías Arizmendi Ortega con DNI 06811045 a quien en adelante denominaremos LA INSTITUCION EDUCATIVA, y de otra parte:</p>
      </div>
      <div className="line left">
        <h3>Los padres y/o apoderados:</h3>
      </div>
      <div className="line left">
        <p>{`Yo, ${registerState.parents[0].names.name1} soy lo máximo!`}</p>
      </div>
      <div className="line left">
        <h3>De el/la/los alumno/a/os:</h3>
      </div>
      <div className="line left">
        <p>{`${registerState.parents[0].names.name1} alumnito`}</p>
      </div>
      <div className="line left">
        <h3>Asumimos los siguientes compromisos:</h3>
      </div>
      <div className="line left">
        <ol>
          <li>Este año es de la disciplina juntamente con los valores de la responsabilidad de estudiar y cumplir las tareas de cada día       del año, y enseñándoles: respeto, amor, obediencia y lealtad ante el especialista de normas educativas y docentes.</li>
          <li>El uniforme de nuestros hijos/as deben ser nuevos y/o presentables, y no descoloridos ya que afectan a la autoestima del alumno/a.</li>
          <li>Para el nivel INICIAL Y PRIMARIO, las loncheras deberán de ingresar con el alumno a la Institución y no se recibirán después de la hora del ingreso.</li>
          <li>Asistiremos a cada una de las reuniones programadas y si faltamos pagaremos  la multa correspondiente a s/40.00.</li>
          <li>Apoyaremos con lealtad y esfuerzo a nuestros hijos/as en las actividades deportivas y culturales, que la Institución programe en el año, evitando oponernos a los logros institucionales.</li>
          <li>Desfilaremos en el aniversario Institucional.</li>
          <li>Respaldaremos el reglamento interno de la Institución, en todo su contenido e implicancias, ya que favorecen a la disciplina y la buena formación de mis menores hijos. No enviaremos celulares, Tablet a nuestros hijos, a menos que la Institución  Educativa lo autorice para alguna actividad, ya que serán requisadas y se les devolverá a fin de año.</li>
          <li>Cada familia DEBE GARANTIZAR que el alumno asista cumplidamente a las clases diarias y que entregue sus tareas, el mismo día que se le dejó, para que sea un estilo de vida del futuro profesional, no dejar las tareas para otro día.</li>
          <li>Hasta el día 30 de cada mes, debo cancelar la pensión mensual en Caja Arequipa, y que a partir del cuarto día del siguiente mes se generará una mora de s/1.00 por día. Más bien, en el mes de diciembre cancelaré la pensión, antes de iniciar los exámenes finales (15 de diciembre).</li>
          <li>Es compromiso del padre de familia QUE SI DESEA LLAMAR A LA/EL MAESTRA(O), SOLO PODRÁ HACERLO de 6pm a 7pm, en otro horario NO DEBE HACERLO pues los maestros están ocupados y no le responderán. Solo en caso de emergencia puede enviar un mensaje de texto por el WhatsApp.</li>
        </ol>
      </div>
    </div>
  )
}

export default Contract