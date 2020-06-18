import React, { useContext } from "react";
import { logout } from "./api-auth";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import UserContext from "../context/user";

export default () => {
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  const handleLogoutButtonClick = () => {
    logout().then(() => {
      setUser(null);
      history.push("/");
    });
  };

  return <Button onClick={handleLogoutButtonClick}>Logout</Button>;
};
