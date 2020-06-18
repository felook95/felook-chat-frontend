import isLoggedIn from "../auth/auth-helper";

const getLoggenInUserProfile = () => {
  return new Promise((resolve, reject) => {
    if (!isLoggedIn()) {
      reject();
    } else {
      fetch("http://localhost:8080/profile/jwt", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        credentials: "include",
      }).then((response) => {
        resolve(response);
      });
    }
  });
};

export { getLoggenInUserProfile };
