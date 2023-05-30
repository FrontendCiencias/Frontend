import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { createContract, createStudents, getSlots } from "../../../../api/secretary.api";

import plus from "../../../../svg/plus.svg";

import Brand from "../../../../components/brand/brand.component";
import { ActionButton } from "../../../../components/buttons/action/action-button.component";
import CreateChildren from "../../../../components/buttons/create/children/create-children.component";
import CreateParents from "../../../../components/buttons/create/parents/create-parents.component";
import Profile from "../../../../components/session/profile/profile.component";
import { ListSlots } from "../../../../components/slots/list-slots.component";
import {
  formatCollegue,
  formatGrade,
  formatMonth,
  getCollegue,
  grades,
} from "../../../../functions/collegue.function";
import { addStudent } from "../../../../features/register/register.slice";
import Input from "../../../../components/input/input.component";
import Select from "../../../../components/select/select.component";

import "./createStudent.style.css"

const CreateStudent = () => {
  const collegueState = getCollegue();
  const dispatch = useDispatch();

  const collegue = useSelector((state) => state.collegue);
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
    birth_day: "",
    birth_month: "",
    birth_year: "",
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
    redirect: false,
  });

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
      birth_day: "",
      birth_month: "",
      birth_year: "",
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
    setWarning({
      error: false,
      loading: false,
      redirect: true,
    })
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
      birth: `${values.birth_year}-${formatMonth(values.birth_month)}-${
        values.birth_day
      }`,
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
      birth: `${values.birth_year}-${formatMonth(values.birth_month)}-${
        values.birth_day
      }`,
      nationality: values.nationality,
      grade: values.grade,
      collegue: formatCollegue(values.grade, collegue),
      pensions: payments,
    }).then((d) => {
      if (d.error) {
        console.log(d);
        setWarning({ error: d.error, loading: false, redirect: false });
      } else {
        setWarning({ error: false, loading: false, redirect: true });
      }
    });
  };

  const redirectBack = () => {
    if (warning.redirect) {
      return <Navigate replace to='/app/secretary/register'/>
    }
  }

  const showError = () =>
    warning.error && <div className="error">{warning.error}</div>;

  const showLoading = () =>
    warning.loading && <div className="loading">Cargando...</div>;

  return (
    <div className="main-container register-secretary">
      <div className="header">
        <Brand text={collegueState} />
      </div>
      <div className="content createStudent">
        {redirectBack()}
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
              <div className="input">Fecha de Nacimiento:</div>
              <Input
                values={values}
                setValues={setValues}
                type="text"
                label="Día"
                id="birth_day"
              />
              <Select
                values={values}
                setValues={setValues}
                label="Mes"
                id="birth_month"
                options={[
                  "Enero",
                  "Febrero",
                  "Marzo",
                  "Abril",
                  "Mayo",
                  "Junio",
                  "Julio",
                  "Agosto",
                  "Septiembre",
                  "Octubre",
                  "Noviembre",
                  "Diciembre",
                ]}
              />
              <Input
                values={values}
                setValues={setValues}
                type="text"
                label="Año"
                id="birth_year"
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
              <Select
                values={values}
                setValues={setValues}
                type="select"
                label="Género"
                id="genre"
                options={["M", "F"]}
              />
              <Select
                values={values}
                setValues={setValues}
                label="Grado"
                id="grade"
                options={grades()}
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
          {showError()}
        <div className="row buttons">
          <a onClick={cancel}>
            <ActionButton text="Cancelar" type="secondary" />
          </a>
          <a onClick={clickSubmit}>
            <ActionButton text="Registrar" type="primary" />
          </a>
        </div>
        <div className="row">
          {showLoading()}
        </div>
      </div>
      <Profile />
    </div>
  );
};

export default CreateStudent;
