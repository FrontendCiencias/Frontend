export const authenticate = (data, next) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(data));
    next();
  }
}

export const isAuthenticated = () => {
  if(typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('jwt')) {
    if (JSON.parse(localStorage.getItem('jwt')).token !== '') {
      return true;
    }
    return false;
  }
    return false;
}

export const getUser = () => {
  if (localStorage.getItem('jwt')) {
    if (JSON.parse(localStorage.getItem('jwt')).token !== '') {
      console.log(JSON.parse(localStorage.getItem('jwt')))
      return JSON.parse(localStorage.getItem('jwt')).data;
    }
    return {};
  }
    return {};
}

export const getToken = () => {
  if (localStorage.getItem('jwt')) {
    if (JSON.parse(localStorage.getItem('jwt')).token !== '') {
      console.log(JSON.parse(localStorage.getItem('jwt')))
      return JSON.parse(localStorage.getItem('jwt')).token;
    }
    return {};
  }
    return {};
}
