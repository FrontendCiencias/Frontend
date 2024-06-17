import { getToken } from "../functions/auth.function";

const API = "https://backend-ts.vercel.app/api"

export const secretarysignin = user => {
  return fetch(`${API}/auth/secretary/signin`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    mode: 'cors',
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};

export const getSlots = collegue => {
  return fetch(`${API}/classroom/vacancies`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getToken()}`
    },
    mode: 'cors',
    body: JSON.stringify(collegue)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};

export const createParents = parent => {
  return fetch(`${API}/tutor/create`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getToken()}`
    },
    mode: 'cors',
    body: JSON.stringify(parent)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};

export const searchParents = parent => {
  return fetch(`${API}/tutor/dni`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getToken()}`
    },
    mode: 'cors',
    body: JSON.stringify(parent)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};

export const createStudents = student => {
  return fetch(`${API}/student/signup`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getToken()}`
    },
    mode: 'cors',
    body: JSON.stringify(student)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};

export const modifyStudents = student => {
  return fetch(`${API}/student/modify`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getToken()}`
    },
    mode: 'cors',
    body: JSON.stringify(student)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};

export const imageStudents = student => {
  console.log(student.image)
  const form = new FormData();
  form.append("dni",student.dni)
  form.append("image",student.image)
  for (var key of form.entries()) {
    console.log(key[0] + ', ' + key[1]);
  }
  return fetch(`${API}/student/image`, {
    method: "post",
    headers: {
      "Authorization": `Bearer ${getToken()}`
    },
    mode: 'cors',
    body: form
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};

export const searchStudents = dni => {
  return fetch(`${API}/student/dni`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getToken()}`
    },
    mode: 'cors',
    body: JSON.stringify(dni)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};

export const searchAllStudents = () => {
  return fetch(`${API}/student`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getToken()}`
    },
    mode: 'cors',
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};

export const createContract = obj => {
  return fetch(`${API}/contract/signup`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getToken()}`
    },
    mode: 'cors',
    body: JSON.stringify(obj)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};