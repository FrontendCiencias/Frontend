import { getToken } from "../functions/auth.function";

const API = "https://backend-ts.vercel.app/api"

export const auxiliarsignin = user => {
  return fetch(`${API}/assistant/signin`, {
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

export const getTodayAttendanceN = () => {
  return fetch(`${API}/attendance/today`, {
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

export const createAttendanceN = () => {
  return fetch(`${API}/attendance/createatt`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getToken()}`
    },
    mode: 'cors',
    body: JSON.stringify({})
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};

export const studentAttendanceN = (d) => {
  return fetch(`${API}/attendance/studentAtt`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getToken()}`
    },
    mode: 'cors',
    body: JSON.stringify(d)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    })
};

