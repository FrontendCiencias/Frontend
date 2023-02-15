import { getToken } from "../functions/auth.function";

const API = "https://backend-ts.vercel.app/api"

export const signin = user => {
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
  console.log(parent)
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