export const getCollegue = () => {
  if (localStorage.getItem('jwt')) {
    if (JSON.parse(localStorage.getItem('jwt')).collegue !== '') {
      return JSON.parse(localStorage.getItem('jwt')).collegue;
    }
    return 'none';
  }
    return 'none';
}

export const formatGrade = (format, grade) => {
  const grades = {
    '3_inicial': {
      0: '3 añitos',
      1: '3I'
    },
    '3_4_inicial': {
      0: '3 y 4 añitos',
      1: '3-4I'
    },
    '4_inicial': {
      0: '4 añitos',
      1: '4I'
    },
    '5_inicial': {
      0: '5 añitos',
      1: '5I'
    },
    '1ro_primaria': {
      0: '1ro de primaria',
      1: '1P'
    },
    '2do_primaria': {
      0: '2do de primaria',
      1: '2P'
    },
    '3ro_primaria': {
      0: '3ro de primaria',
      1: '3P'
    },
    '4to_primaria': {
      0: '4to de primaria',
      1: '4P'
    },
    '5to_primaria': {
      0: '5to de primaria',
      1: '5P'
    },
    '6to_primaria': {
      0: '6to de primaria',
      1: '6P'
    },
    '1ro_secundaria': {
      0: '1ro de secundaria',
      1: '1S'
    },
    '2do_secundaria': {
      0: '2do de secundaria',
      1: '2S'
    },
    '3ro_secundaria': {
      0: '3ro de secundaria',
      1: '3S'
    },
    '4to_secundaria': {
      0: '4to de secundaria',
      1: '4S'
    },
    '5to_secundaria': {
      0: '5to de secundaria',
      1: '5S'
    },
  }
  return grades[grade][format]
}


export const formatCollegue = (g, collegue) => {
  const grades = {
    '3_inicial': "Ciencias Aplicadas",
    '4_inicial': "Ciencias Aplicadas",
    '5_inicial': "Ciencias Aplicadas",
    '1ro_primaria': "Ciencias Aplicadas",
    '2do_primaria': "Ciencias Aplicadas",
    '3ro_primaria': "Ciencias Aplicadas",
    '4to_primaria': "Ciencias Aplicadas",
    '5to_primaria': "Ciencias Aplicadas",
    '6to_primaria': "Ciencias Aplicadas",
    '1ro_secundaria': "Ciencias Secundaria",
    '2do_secundaria': "Ciencias Secundaria",
    '3ro_secundaria': "Ciencias Secundaria",
    '4to_secundaria': "Ciencias Secundaria",
    '5to_secundaria': "Ciencias Secundaria",
  }

  if (collegue == "Cimas") {
    return "Colegio Cimas"
  }
  return grades[g]
}