import React, { useState } from "react";

import "./create-children.style.css";

import user_card from "../../../../svg/user-card.svg";
import plus from "../../../../svg/plus.svg";
import { ActionButton } from "../../action/action-button.component";
import Input from "../../../input/input.component";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../../../../features/register/register.slice";
import { createStudents } from "../../../../api/secretary.api";
import { formatCollegue } from "../../../../functions/collegue.function";

export const CreateChildren = (props) => {
  const dispatch = useDispatch();

  const collegue = useSelector((state) => state.collegue);
  const [shown, setShown] = useState(false);
  const [names, setNames] = useState({
    name1: "",
    name2: "",
    surname1: "",
    surname2: "",
  });
  const [values, setValues] = useState({
    genre: "",
    dni: "",
    address: "",
    phone: "",
    origin: "",
    birth: "",
    nationality: "",
    grade: "",
  });
  const [payments, setPayments] = useState({
    admission: "",
    tuition: "",
    march: "",
    april: "",
    may: "",
    june: "",
    july: "",
    august: "",
    september: "",
    october: "",
    november: "",
    december: "",
  });
  const [warning, setWarning] = useState({
    error: false,
    loading: false,
  });
  const { name, type } = props;

  const cancel = () => {
    setNames({
      name1: "",
      name2: "",
      surname1: "",
      surname2: "",
    });
    setValues({
      genre: "",
      dni: "",
      address: "",
      phone: "",
      origin: "",
      birth: "",
      nationality: "",
      grade: "",
    });
    setPayments({
      admission: "",
      tuition: "",
      march: "",
      april: "",
      may: "",
      june: "",
      july: "",
      agost: "",
      september: "",
      october: "",
      november: "",
      december: "",
    });
    setShown(false);
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setWarning({ error: false, loading: true });
    console.log({
      names: names,
      genre: values.genre,
      dni: values.dni,
      address: values.address,
      phone: values.phone,
      origin: values.origin,
      birth: values.birth,
      nationality: values.nationality,
      grade: values.grade,
      collegue: formatCollegue(values.grade, collegue),
      pensions: payments,
    });
    createStudents({
      names: names,
      genre: values.genre,
      dni: values.dni,
      address: values.address,
      phone: values.phone,
      origin: values.origin,
      birth: values.birth,
      nationality: values.nationality,
      grade: values.grade,
      collegue: formatCollegue(values.grade, collegue),
      pensions: payments,
    }).then((d) => {
      if (d.error) {
        console.log(d);
        setWarning({ error: d.error, loading: false });
      } else {
        setWarning({ error: false, loading: false });
        dispatch(addStudent(d));
        setShown(false);
      }
    });
  };

  const showError = () =>
    warning.error && <div className="error">{warning.error}</div>;

  const showLoading = () =>
    warning.loading && <div className="loading">Cargando...</div>;

  if (type == "plus") {
    if (shown) {
      return (
        <div className="pop-up-background children">
          <div className="pop-up-children">
            <div className="inputs">
              <div className="col">
                <div className="row">
                  <Input
                    values={names}
                    setValues={setNames}
                    type="text"
                    label="Primer Nombre"
                    id="name1"
                  />
                  <Input
                    values={names}
                    setValues={setNames}
                    type="text"
                    label="Segundo Nombre"
                    id="name2"
                  />
                </div>
                <div className="row">
                  <Input
                    values={names}
                    setValues={setNames}
                    type="text"
                    label="Primer Apellido"
                    id="surname1"
                  />
                  <Input
                    values={names}
                    setValues={setNames}
                    type="text"
                    label="Segundo Apellido"
                    id="surname2"
                  />
                </div>
                <div className="row">
                  <Input
                    values={values}
                    setValues={setValues}
                    type="text"
                    label="Dirección"
                    id="address"
                  />
                  <Input
                    values={values}
                    setValues={setValues}
                    type="text"
                    label="Procedencia"
                    id="origin"
                  />
                </div>
                <div className="row">
                  <Input
                    values={values}
                    setValues={setValues}
                    type="text"
                    label="Género"
                    id="genre"
                  />
                  <Input
                    values={values}
                    setValues={setValues}
                    type="text"
                    label="F. Nacimiento"
                    id="birth"
                  />
                </div>
                <div className="row">
                  <Input
                    values={values}
                    setValues={setValues}
                    type="text"
                    label="Nacionalidad"
                    id="nationality"
                  />
                  <Input
                    values={values}
                    setValues={setValues}
                    type="text"
                    label="Grado"
                    id="grade"
                  />
                </div>
                <div className="row">
                  <Input
                    values={values}
                    setValues={setValues}
                    type="text"
                    label="N. Celular"
                    id="phone"
                  />
                  <Input
                    values={values}
                    setValues={setValues}
                    type="text"
                    label="N. DNI"
                    id="dni"
                  />
                </div>
              </div>
              <div className="col payments">
                <div className="row">
                  <Input
                    values={payments}
                    setValues={setPayments}
                    type="text"
                    label="D. Ingreso"
                    id="admission"
                  />
                  <Input
                    values={payments}
                    setValues={setPayments}
                    type="text"
                    label="Matrícula"
                    id="tuition"
                  />
                </div>
                <div className="row">
                  <Input
                    values={payments}
                    setValues={setPayments}
                    type="text"
                    label="Marzo"
                    id="march"
                  />
                  <Input
                    values={payments}
                    setValues={setPayments}
                    type="text"
                    label="Abril"
                    id="april"
                  />
                </div>
                <div className="row">
                  <Input
                    values={payments}
                    setValues={setPayments}
                    type="text"
                    label="Mayo"
                    id="may"
                  />
                  <Input
                    values={payments}
                    setValues={setPayments}
                    type="text"
                    label="Junio"
                    id="june"
                  />
                </div>
                <div className="row">
                  <Input
                    values={payments}
                    setValues={setPayments}
                    type="text"
                    label="Julio"
                    id="july"
                  />
                  <Input
                    values={payments}
                    setValues={setPayments}
                    type="text"
                    label="Agosto"
                    id="august"
                  />
                </div>
                <div className="row">
                  <Input
                    values={payments}
                    setValues={setPayments}
                    type="text"
                    label="Septiembre"
                    id="september"
                  />
                  <Input
                    values={payments}
                    setValues={setPayments}
                    type="text"
                    label="Octubre"
                    id="october"
                  />
                </div>
                <div className="row">
                  <Input
                    values={payments}
                    setValues={setPayments}
                    type="text"
                    label="Noviembre"
                    id="november"
                  />
                  <Input
                    values={payments}
                    setValues={setPayments}
                    type="text"
                    label="Diciembre"
                    id="december"
                  />
                </div>
              </div>
            </div>
            <div className="row buttons">
              <a onClick={() => setShown(false)}>
                <ActionButton text="Cancelar" type="secondary" />
              </a>
              <a onClick={clickSubmit}>
                <ActionButton text="Registrar" type="primary" />
              </a>
            </div>
            <div className="row">
              {showError()}
              {showLoading()}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <a onClick={() => setShown(true)}>
          <div className={`profile-button`}>
            <img src={plus} />
          </div>
        </a>
      );
    }
  } else {
    if (shown) {
    } else {
      return (
        <div className={`profile-button`}>
          <img className="img" src={user_card} />
          <h4>{name}</h4>
        </div>
      );
    }
  }
};

export default CreateChildren;
