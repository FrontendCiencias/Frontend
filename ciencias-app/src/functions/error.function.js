export const codeError = (e) => {
  const listErrors = {
    "STUDENT_NOT_FOUND_ATTENDANCE": "Estudiante no registrado :c",
    "ALREADY_SIGN_STUDENT_ATTENDANCE": "Asistencia ya registrada :D",
  }
  return listErrors[e];
}