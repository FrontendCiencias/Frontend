import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { createContract, createStudents, getSlots, modifyStudents, searchStudents } from "../../../../../../api/secretary.api";
import Brand from "../../../../../../components/brand/brand.component";
import Profile from "../../../../../../components/session/profile/profile.component";
import Input from "../../../../../../components/input/input.component";
import Select from "../../../../../../components/select/select.component";
import { ActionButton } from "../../../../../../components/buttons/action/action-button.component";
import { formatCollegue, formatGrade, formatInverseMonth, formatMonth, grades } from "../../../../../../functions/collegue.function";

const EditStudent = () => {
  let { dni } = useParams();
  const collegue = useSelector((state) => state.collegue);
  

  const showError = () => (
    warning.error &&
    (<div className="error">
      {warning.error}
    </div>)
  )


  const [names, setNames] = useState({
    name1: "",
    name2: "",
    surname1: "",
    surname2: "",
  });
  const [data, setData] = useState({
    genre: "",
    nationality: "",
    address: "",
    phone: "",
    origin: "",
    birth_day: "",
    birth_month: "",
    birth_year: "",
    grade: "",
  });
  const [warning, setWarning] = useState({
    error: false,
    loading: false,
    redirect: false,
  });

  useEffect(() => {
    searchStudents({dni}).then(d => {
      setNames(d.names)
      console.log(d)
      const fecha = new Date(d.birth);  
      setData({
        genre: d.genre,
        nationality: d.nationality,
        address: d.address,
        phone: d.phone,
        origin: d.origin,
        birth_day: fecha.getDate(),
        birth_month: formatInverseMonth(fecha.getMonth() + 1),
        birth_year: fecha.getFullYear(),
        grade: d.grade,
      })
      console.log(names)
      console.log(data)
    })
  }, [])

  useEffect(() => {
    console.log("namesitos", names);
  }, [names]);

  useEffect(() => {
    console.log("datita rica", data);
  }, [data]);

  const cancel = () => {
    setNames({
      name1: "",
      name2: "",
      surname1: "",
      surname2: "",
    });
    setData({
      genre: "",
      nationality: "",
      address: "",
      phone: "",
      origin: "",
      birth_day: "",
      birth_month: "",
      birth_year: "",
      grade: "",
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
    console.log("hola",{names: names,
      genre: data.genre,
      dni: dni,
      address: data.address,
      phone: data.phone,
      origin: data.origin,
      birth: `${data.birth_year}-${formatMonth(data.birth_month)}-${
        data.birth_day
      }`,
      nationality: data.nationality,
      grade: data.grade,
      collegue: formatCollegue(data.grade, collegue)})
    modifyStudents({
      names: names,
      genre: data.genre,
      dni: dni,
      address: data.address,
      phone: data.phone,
      origin: data.origin,
      birth: `${data.birth_year}-${formatMonth(data.birth_month)}-${
        data.birth_day
      }`,
      nationality: data.nationality,
      grade: data.grade,
      collegue: formatCollegue(data.grade, collegue),
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
      return <Navigate replace to='./../../'/>
    }
  }

  const collegueState = useSelector(state => state.collegue)
  return (
    <div className="main-container">
      <div className="header">
        <Brand text={collegueState} link="/app/admin/secretary"/>
      </div>
      <div className="content">
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
                values={data}
                setValues={setData}
                type="text"
                label="Género"
                id="genre"
              />
              <Input
                values={data}
                setValues={setData}
                type="text"
                label="Nacionalidad"
                id="nationality"
              />
            </div>
          </div>
            <div className="col">

            <div className="row">
              <Input
                values={data}
                setValues={setData}
                type="text"
                label="Dirección"
                id="address"
              />
              <Input
                values={data}
                setValues={setData}
                type="text"
                label="Celular"
                id="phone"
              />
            </div>

              <div className="row">
                <Input
                  values={data}
                  setValues={setData}
                  type="text"
                  label="Procedencia"
                  id="origin"
                />
                <Select
                  values={data}
                  setValues={setData}
                  label="Grado"
                  id="grade"
                  options={grades()}
                />
              </div>
              

              <div className="row">
                <div className="input">Fecha de Nacimiento:</div>
                <Input
                  values={data}
                  setValues={setData}
                  type="text"
                  label="Día"
                  id="birth_day"
                />
                <Select
                  values={data}
                  setValues={setData}
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
                  values={data}
                  setValues={setData}
                  type="text"
                  label="Año"
                  id="birth_year"
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
            <ActionButton text="Editar" type="primary" />
          </a>
        </div>
      </div>
      <Profile/>
    </div>
  )
};

export default EditStudent;
