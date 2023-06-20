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

export const searchStudents = student => {
  return fetch(`${API}/student/dni`, {
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
      console.log("hola")
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