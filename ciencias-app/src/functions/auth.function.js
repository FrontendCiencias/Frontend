export const isExpirated = () => {
  // console.log(JSON.parse(localStorage.getItem("jwt")).expired);
  if (JSON.parse(localStorage.getItem("jwt")).expired) {
    console.log(JSON.parse(localStorage.getItem("jwt")).expired);
    const fecha = new Date();
    if (JSON.parse(localStorage.getItem("jwt")).expired - fecha > 2 * 60 * 60 * 1000) {
      localStorage.removeItem("jwt");
      return true;
    }
    return false;
  }
  localStorage.removeItem("jwt");
  return true;
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
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
