export const getCollegue = () => {
  if (localStorage.getItem('jwt')) {
    if (JSON.parse(localStorage.getItem('jwt')).collegue !== '') {
      return JSON.parse(localStorage.getItem('jwt')).collegue;
    }
    return 'none';
  }
    return 'none';
}

export const grades = () => {
  if(getCollegue() == "Cimas") {
    return ["3_4_inicial","5_inicial","1ro_primaria","2do_primaria","3ro_primaria","4to_primaria","5to_primaria","6to_primaria","1ro_secundaria","2do_secundaria","3ro_secundaria","4to_secundaria","5to_secundaria"]
  }
  return ["3_inicial","4_inicial","5_inicial","1ro_primaria","2do_primaria","3ro_primaria","4to_primaria","5to_primaria","6to_primaria","1ro_secundaria","2do_secundaria","3ro_secundaria","4to_secundaria","5to_secundaria"]
}

export const formatMonth = (month) => {
  const months = {
    "Enero" : "01",
    "Febrero" : "02",
    "Marzo" : "03",
    "Abril" : "04",
    "Mayo" : "05",
    "Junio" : "06",
    "Julio" : "07",
    "Agosto" : "08",
    "Septiembre" : "09",
    "Octubre" : "10",
    "Noviembre" : "11",
    "Diciembre" : "12",
  }
  return months[month]
}

export const formatInverseMonth = (month) => {
  const months = {
    "1": "Enero",
    "01": "Enero",
    "2": "Febrero",
    "02": "Febrero",
    "3": "Marzo",
    "03": "Marzo",
    "4": "Abril",
    "04": "Abril",
    "5": "Mayo",
    "05": "Mayo",
    "6": "Junio",
    "06": "Junio",
    "7": "Julio",
    "07": "Julio",
    "8": "Agosto",
    "08": "Agosto",
    "9": "Septiembre",
    "09": "Septiembre",
    "10": "Octubre",
    "11": "Noviembre",
    "12": "Diciembre"
  };

  return months[month]
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
    '':{
      0:'',
      1:''
    }
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

export const formatSections = (s) => {
  const sections = {
    '1A': {
      0: "1ro_secundaria",
      1: "A"
    },
    '1E': {
      0: "1ro_secundaria",
      1: "E"
    },
    '2A': {
      0: "2do_secundaria",
      1: "A"
    },
    '2E': {
      0: "2do_secundaria",
      1: "E"
    },
    '3A': {
      0: "3ro_secundaria",
      1: "A"
    },
    '3B': {
      0: "3ro_secundaria",
      1: "B"
    },
    '3E': {
      0: "3ro_secundaria",
      1: "E"
    },
    '4A': {
      0: "4to_secundaria",
      1: "A"
    },
    '4B': {
      0: "4to_secundaria",
      1: "B"
    },
    '4E': {
      0: "4to_secundaria",
      1: "E"
    },
    '5A': {
      0: "5to_secundaria",
      1: "A"
    },
    '5B': {
      0: "5to_secundaria",
      1: "B"
    },
    '5E': {
      0: "5to_secundaria",
      1: "E"
    }
  }
  return sections[s]
}