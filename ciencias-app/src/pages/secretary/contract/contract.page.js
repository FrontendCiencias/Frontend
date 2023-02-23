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
          <p>{`Yo, ${p.names.name1} ${p.names.name2} ${p.names.surname1} ${p.names.surname2} con DNI: ${p.dni} y celular: ${p.phone}, domiciliado/a en: ${p.address}, ${p.relationship};`}</p>
        </div>
      );
    });
  };
  const listStudents = () => {
    return registerState.students.map((s, i) => {
      return (
        <div className="line left">
          <p>
            {`${s.names.surname1} ${s.names.surname2} ${s.names.name1} ${
              s.names.name2
            } cursando: ${formatGrade(0, s.grade)}, con número de celular: ${
              s.phone
            }`}
            , bajo los montos de pago:
          </p>
          <p>{`Derecho de Ingreso: ${s.pension[0].admission.total}, Matrícula: ${s.pension[0].tuition.total}, Marzo: ${s.pension[0].march.total}, Abril: ${s.pension[0].april.total}, Mayo: ${s.pension[0].may.total}, Junio: ${s.pension[0].june.total}, Julio: ${s.pension[0].july.total}, Agosto: ${s.pension[0].august.total}, Septiembre: ${s.pension[0].september.total}, Octubre: ${s.pension[0].october.total}, Noviembre: ${s.pension[0].november.total}, Diciembre: ${s.pension[0].december.total}`}</p>
        </div>
      );
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
          <h3>{p.relationship.toUpperCase()} - {p.dni}</h3>
        </div>
      );
    });
  };
  return (
    <div className="contract-container">
      <div className="main">
        <img src={cimas} />
        <h2>CONTRATO DE PENSIONES DE ESTUDIOS - 2023</h2>
        <img src={ciencias} />
      </div>
      <div className="line">
        <p>
          Conste el presente CONTRATO DE PRESTACIÓN DE SERVICIOS ESCOLARES - AÑO
          2023, que suscriben de una parte la I.E.P. {collegueState} con RUC Nº
          10068110454, con domicilio en la Av. Los Colonizadores Parcela 191 -1
          Villa el Pedregal Majes, debidamente representado por su gerente Mg.
          Juan Mesías Arizmendi Ortega con DNI 06811045 a quien en adelante
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
      {listStudents()}
      <div className="line left">
        <h3>Asumimos los siguientes compromisos:</h3>
      </div>
      <div className="line left">
        <ol>
          <li>
            Este año es de la disciplina juntamente con los valores de la
            responsabilidad de estudiar y cumplir las tareas de cada día del
            año, y enseñándoles: respeto, amor, obediencia y lealtad ante el
            especialista de normas educativas y docentes.
          </li>
          <li>
            El uniforme de nuestros hijos/as deben ser nuevos y/o presentables,
            y no descoloridos ya que afectan a la autoestima del alumno/a.
          </li>
          <li>
            Para el nivel INICIAL Y PRIMARIO, las loncheras deberán de ingresar
            con el alumno a la Institución y no se recibirán después de la hora
            del ingreso.
          </li>
          <li>
            Asistiremos a cada una de las reuniones programadas y si faltamos
            pagaremos la multa correspondiente a s/40.00.
          </li>
          <li>
            Apoyaremos con lealtad y esfuerzo a nuestros hijos/as en las
            actividades deportivas y culturales, que la Institución programe en
            el año, evitando oponernos a los logros institucionales.
          </li>
          <li>Desfilaremos en el aniversario Institucional.</li>
          <li>
            Respaldaremos el reglamento interno de la Institución, en todo su
            contenido e implicancias, ya que favorecen a la disciplina y la
            buena formación de mis menores hijos. No enviaremos celulares,
            Tablet a nuestros hijos, a menos que la Institución Educativa lo
            autorice para alguna actividad, ya que serán requisadas y se les
            devolverá a fin de año.
          </li>
          <li>
            Cada familia DEBE GARANTIZAR que el alumno asista cumplidamente a
            las clases diarias y que entregue sus tareas, el mismo día que se le
            dejó, para que sea un estilo de vida del futuro profesional, no
            dejar las tareas para otro día.
          </li>
          <li>
            Hasta el día 30 de cada mes, debo cancelar la pensión mensual en
            Caja Arequipa, y que a partir del cuarto día del siguiente mes se
            generará una mora de s/1.00 por día. Más bien, en el mes de
            diciembre cancelaré la pensión, antes de iniciar los exámenes
            finales (15 de diciembre).
          </li>
          <li>
            Es compromiso del padre de familia QUE SI DESEA LLAMAR A LA/EL
            MAESTRA(O), SOLO PODRÁ HACERLO de 6pm a 7pm, en otro horario NO DEBE
            HACERLO pues los maestros están ocupados y no le responderán. Solo
            en caso de emergencia puede enviar un mensaje de texto por el
            WhatsApp.
          </li>
        </ol>
      </div>
      <div className="line">
        <p>
          La vigencia de este contrato es del 06 de Marzo hasta el 31 de
          Diciembre del 2023, tiempo en el cual garantizamos buena enseñanza a
          nuestros alumnos acorde a la visión institucional.
        </p>
      </div>
      <div className="line left">
        <p>
          Declarando conformidad, las partes ratifican su compromiso siendo su
          contenido la espontanea expresión de su voluntad de ambos, firmamos.
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
          <p>Mg. Juan Mesías Arizmendi Ortega</p>
          <h3>DIRECTOR - 06811045</h3>
        </div>
      </div>
    </div>
  );
};

export default Contract;
