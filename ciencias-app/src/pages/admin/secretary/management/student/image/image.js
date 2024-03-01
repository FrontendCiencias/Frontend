import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { createContract, createStudents, getSlots, imageStudents, modifyStudents, searchStudents } from "../../../../../../api/secretary.api";
import Brand from "../../../../../../components/brand/brand.component";
import Profile from "../../../../../../components/session/profile/profile.component";
import CardStudent from "../../../../../../components/cards/student.js"
import Input from "../../../../../../components/input/input.component";
import Select from "../../../../../../components/select/select.component";
import { ActionButton } from "../../../../../../components/buttons/action/action-button.component";
import { formatCollegue, formatMonth, formatGrade } from "../../../../../../functions/collegue.function";

const ImageStudent = () => {
  let { dni } = useParams();
  const collegue = useSelector((state) => state.collegue);
  
  const [file, setFile] = useState(null);
  const [student, setStudent] = useState({
    url:"",
    names: {
      name1:"",
      name2:"",
      surname1:"",
      surname2:""
    },
    grade:""
  });

  // Manejar el cambio en el input de archivo
  const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
  };
  const [warning, setWarning] = useState({
    error: false,
    loading: false,
    redirect: false,
  });

  useEffect(() => {
    searchStudents({dni: dni}).then((d) => {
      setStudent(d)
      console.log (d)
    })
  }, [])
  

  const cancel = () => {
    setWarning({
      error: false,
      loading: false,
      redirect: true,
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData();
      form.append("dni", dni);
      form.append("image", file);

    if (file) {
        try {

            // imageStudents(form)

            imageStudents({
              dni: dni,
              image: file
            }).then((response) => {
              if (response.error) {
                console.log(response)
                console.error('Ocurrió un error al cargar la imagen en el servidor.');
              } else {
                console.log(response)
                console.log('La imagen se cargó correctamente en el servidor.');
              }
            })
        } catch (error) {
            console.error('Error de red:', error);
        }
    }
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

          <div className="row">
            <CardStudent
              url={student.url}
              name1={student.names.name1}
              name2={student.names.name2}
              surname1={student.names.surname1}
              surname2={student.names.surname2}
              grade={formatGrade(0,student.grade)}
            />
          </div>
          <div className="row">
            <form onSubmit={handleSubmit}>
              <div className="row">
              <input type="file" accept="image/*" onChange={handleFileChange} />
              </div>
              <div className="row">
                <ActionButton text={"Cambiar"} type={"primary"} size={"small"}/>
              </div>
            </form>
          </div>
      </div>
      <Profile/>
    </div>
  )
};

export default ImageStudent;
