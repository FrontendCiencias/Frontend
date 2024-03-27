export const codeError = (e) => {
  const listErrors = {
    "ERROR_SING_STUDENT_ATTENDACE": "Alumno no registrado",
    "STUDENT_NOT_FOUND_ATTENDANCE": "Alumno no registrado",
    "ALREADY_SIGN_STUDENT_ATTENDANCE": "Asistencia ya registrada :D",
  }
  return listErrors[e];
}

export const codeAttendance = (e) => {
  // const listState = {
  //   "P": "TEMPRANO",
  //   "T": "TARDE",
  //   "F": "FALTA",
  //   "J": "JUSTIFICADO",
  //   "X": "FERIADO",
  // }
  const listState = {
    "A": "TEMPRANO",
    "B": "TARDE",
    "C": "FALTA",
    "J": "JUSTIFICADO",
    "X": "FERIADO",
  }
  return listState[e];
}