const API = "https://backend-ts.vercel.app"

export const test = user => {
  return fetch(`${API}/api/auth/secretary/signin`, {
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