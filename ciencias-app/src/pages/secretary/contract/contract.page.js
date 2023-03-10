import { useDispatch, useSelector } from "react-redux";

import cimas from "../../../svg/cimas.jpg";
import ciencias from "../../../svg/ciencias.jpg";

import "./contract.style.css";
import { formatGrade } from "../../../functions/collegue.function";

const Contract = () => {
  const collegueState = useSelector((state) => state.collegue);
  const registerState = JSON.parse(localStorage.getItem("lastContract"));
  console.log(registerState);
  console.log(collegueState);
  const listParents = () => {
    return registerState.parents.map((p, i) => {
      return (
        <div className="line left">
          <p>Yo <b>{p.names.name1} {p.names.name2} {p.names.surname1} {p.names.surname2}</b> con DNI: <b>{p.dni}</b> y celular: <b>{p.phone}</b>, domiciliado/a en: <b>{p.address}</b>, <b>{p.relationship}</b></p>
        </div>
      );
    });
  };
  const listStudents = () => {
    return registerState.students.map((s, i) => {
      return (
        // <div className="line left">
          <tr> 
            <td className="td-line">
            <b>{`${s.names.name1} ${
              s.names.name2} ${s.names.surname1} ${s.names.surname2}`}</b>
            </td>
            <td className="td-line"> {`${formatGrade(0, s.grade)}`} </td>
              <td className="td-line">
              <tr>
                <td> <b> D. Ingreso: </b></td><td> {s.pension[0].admission.total} </td>
                <td> <b> Matricula: </b></td><td>   {s.pension[0].tuition.total} </td>
                <td> <b> Marzo: </b></td><td>   {s.pension[0].march.total} </td>
              </tr> 
              <tr>
                <td> <b> Abril: </b></td><td>  {s.pension[0].april.total} </td>
                <td> <b> Mayo: </b></td><td>   {s.pension[0].may.total} </td>
                <td> <b> Junio: </b></td><td>   {s.pension[0].june.total} </td>
              </tr> 
              <tr>
                <td> <b> Julio: </b></td><td>  {s.pension[0].july.total} </td>
                <td> <b> Agosto: </b></td><td>   {s.pension[0].august.total} </td>
                <td> <b> Septiembre: </b></td><td>   {s.pension[0].september.total} </td>
              </tr> 
              <tr>
                <td> <b> Octubre: </b></td><td>  {s.pension[0].october.total} </td>
                <td> <b> Noviembre: </b></td><td>   {s.pension[0].november.total} </td>
                <td> <b> Diciembre: </b></td><td>   {s.pension[0].december.total} </td>
              </tr> 
              </td>
          </tr>
      );
          {/* <p>
             cursando: <b></b>,
            ,bajo los montos de pago:
          </p>
          <p>{`Derecho de Ingreso: `}<b></b>{`, Matr??cula: , Marzo: ${s.pension[0].march.total}, Abril: ${s.pension[0].april.total}, Mayo: ${s.pension[0].may.total}, Junio: ${s.pension[0].june.total}, Julio: ${s.pension[0].july.total}, Agosto: ${s.pension[0].august.total}, Septiembre: ${s.pension[0].september.total}, Octubre: ${s.pension[0].october.total}, Noviembre: ${s.pension[0].november.total}, Diciembre: ${s.pension[0].december.total}`}</p> */}
          
        // </div>
    });
  };

  const listFirmas = () => {
    return registerState.parents.map((p, i) => {
      return (
        <div className="center">
          <p>_______________________</p>
          <p>
            {p.names.surname1} {p.names.surname2} {p.names.name1} {p.names.name2}
          </p>
          <h3>{p.relationship} - {p.dni}</h3>
        </div>
      );
    });
  };

  const address = () => {
    if (collegueState=="Ciencias") {
      return "Av. Condesuyos B2 - Frente a la Alameda"
    }
    return "Av. Los Colonizadores Parcela 191 -1"
  }
  return (
    <div className="contract-container">
      <div className="main">
        <img src={cimas} />
        <h2>CONTRATO DE PENSIONES DE ESTUDIOS - 2023</h2>
        <img src={ciencias} />
      </div>
      <div className="line">
        <p>
          Conste el presente CONTRATO DE PRESTACI??N DE SERVICIOS ESCOLARES - A??O
          2023, que suscriben de una parte la I.E.P. {collegueState} con RUC N??
          10068110454, con domicilio en la {address()} - Villa el Pedregal Majes, debidamente representado por su gerente Mg.
          Juan Mes??as Arizmendi Ortega con DNI 06811045 a quien en adelante
          denominaremos LA INSTITUCION EDUCATIVA, y de otra parte:
        </p>
      </div>
      <div className="line left">
        <h3>Los padres y/o apoderados:</h3>
      </div>
      {listParents()}
      <div className="line left">
        <h3>De el/la/los alumno/a/os:</h3>
      </div>
      <table>
        <thead>

        <tr className="thead-line">
          <th> Nombres y Apellidos </th>
          <th> Grado </th>
          <th> Pagos </th>
        </tr>
        </thead>
       <tbody>
        {/* <hr style={{background: 'black',color: 'black',borderColor: 'black',height:'0.2vw',width:'80vw'}}/> */}
      {listStudents()}
       </tbody>
      </table>
      <div className="line left">
        <h3>Asumimos los siguientes compromisos:</h3>
      </div>
      <div className="line left">
        <ol>
          <li>
            Este a??o es de la disciplina juntamente con los valores de la
            responsabilidad de estudiar y cumplir las tareas de cada d??a del
            a??o, y ense????ndoles: respeto, amor, obediencia y lealtad ante el
            especialista de normas educativas y docentes.
          </li>
          <li>
            El uniforme de nuestros hijos/as deben ser nuevos y/o presentables,
            y no descoloridos ya que afectan a la autoestima del alumno/a.
          </li>
          <li>
            Para el nivel INICIAL Y PRIMARIO, las loncheras deber??n de ingresar
            con el alumno a la Instituci??n y no se recibir??n despu??s de la hora
            del ingreso.
          </li>
          <li>
            Asistiremos a cada una de las reuniones programadas y si faltamos
            pagaremos la multa correspondiente a s/40.00.
          </li>
          <li>
            Apoyaremos con lealtad y esfuerzo a nuestros hijos/as en las
            actividades deportivas y culturales, que la Instituci??n programe en
            el a??o, evitando oponernos a los logros institucionales.
          </li>
          <li>Desfilaremos en el aniversario Institucional.</li>
          <li>
            Respaldaremos el reglamento interno de la Instituci??n, en todo su
            contenido e implicancias, ya que favorecen a la disciplina y la
            buena formaci??n de mis menores hijos. No enviaremos celulares,
            Tablet a nuestros hijos, a menos que la Instituci??n Educativa lo
            autorice para alguna actividad, ya que ser??n requisadas y se les
            devolver?? a fin de a??o.
          </li>
          <li>
            Cada familia DEBE GARANTIZAR que el alumno asista cumplidamente a
            las clases diarias y que entregue sus tareas, el mismo d??a que se le
            dej??, para que sea un estilo de vida del futuro profesional, no
            dejar las tareas para otro d??a.
          </li>
          <li>
            Hasta el d??a 30 de cada mes, debo cancelar la pensi??n mensual en
            Caja Arequipa, y que a partir del cuarto d??a del siguiente mes se
            generar?? una mora de s/1.00 por d??a. M??s bien, en el mes de
            diciembre cancelar?? la pensi??n, antes de iniciar los ex??menes
            finales (15 de diciembre).
          </li>
          <li>
            Es compromiso del padre de familia QUE SI DESEA LLAMAR A LA/EL
            MAESTRA(O), SOLO PODR?? HACERLO de 6pm a 7pm, en otro horario NO DEBE
            HACERLO pues los maestros est??n ocupados y no le responder??n. Solo
            en caso de emergencia puede enviar un mensaje de texto por el
            WhatsApp.
          </li>
        </ol>
      </div>
      <div className="line">
        <p>
          La vigencia de este contrato es del 06 de Marzo hasta el 31 de
          Diciembre del 2023, tiempo en el cual garantizamos buena ense??anza a
          nuestros alumnos acorde a la visi??n institucional.
        </p>
      </div>
      <div className="line left">
        <p>
          Declarando conformidad, las partes ratifican su compromiso siendo su
          contenido la espontanea expresi??n de su voluntad de ambos, firmamos.
        </p>
      </div>
      <div className="line right">
        <p>
          Majes,{" "}
          {new Date().toLocaleDateString("es-pe", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
      <div className="firmas">
        {listFirmas()}
        <div className="center">
          _______________________
          <p>Mg. Juan Mes??as Arizmendi Ortega</p>
          <h3>DIRECTOR - 06811045</h3>
        </div>
      </div>
    </div>
  );
};

export default Contract;
