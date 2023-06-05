export const isExpirated = () => {
  // console.log(JSON.parse(localStorage.getItem("jwt")).expired);
  if (JSON.parse(localStorage.getItem("jwt")).expired) {
    const fecha = new Date().getTime();
    console.log(JSON.parse(localStorage.getItem("jwt")).expired-fecha);
    if (JSON.parse(localStorage.getItem("jwt")).expired < fecha) {
      localStorage.removeItem("jwt");
      alert("Sesión expirada, ingresa tus datos de nuevo.")
      return true;
    }
    return false;
  }
  localStorage.removeItem("jwt");
  return true;
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    let now = new Date()
    let expired = now.getTime() + 1000*60*40
    localStorage.setItem("jwt", JSON.stringify({...data, expired: expired}));
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt") && (JSON.parse(localStorage.getItem("jwt")).token !== "")) {
    if (!isExpirated()) {
      return true;
    }
    return false;
  }
  return false;
};

export const getUser = () => {
  if (localStorage.getItem("jwt")) {
    if (JSON.parse(localStorage.getItem("jwt")).token !== "") {
      console.log(JSON.parse(localStorage.getItem("jwt")));
      return JSON.parse(localStorage.getItem("jwt")).data;
    }
    return {};
  }
  return {};
};

export const getToken = () => {
  if (localStorage.getItem("jwt")) {
    if (JSON.parse(localStorage.getItem("jwt")).token !== "") {
      console.log(JSON.parse(localStorage.getItem("jwt")));
      return JSON.parse(localStorage.getItem("jwt")).token;
    }
    return {};
  }
  return {};
};
