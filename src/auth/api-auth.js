const register = (user) => {
  return fetch("http://localhost:8080/registration", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(user),
  });
};

const login = (user) => {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(user),
  });
};

const logout = () => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:8080/logout", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.text())
      .then((json) => resolve(json));
  });
};

export { login, logout, register };
