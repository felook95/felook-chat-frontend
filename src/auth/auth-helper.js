import { Cookies } from "react-cookie";

const cookies = new Cookies();

const isLoggedIn = () => {
  if (cookies.get("is-logged-in") === "true") {
    return true;
  } else {
    return false;
  }
};

export default isLoggedIn;
