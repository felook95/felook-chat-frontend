import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { Card, CardActions, Button, CardContent } from "@material-ui/core";
import { login } from "./api-auth";
import { useHistory } from "react-router-dom";
import UserContext from "../context/user";

export default () => {
  const { setUser } = useContext(UserContext);
  const history = useHistory();
  const [values, setValues] = useState({
    username: "",
    password: "",
    error: "",
    redirectToReferrer: false,
  });

  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };

  const handleSubmitClick = () => {
    const user = {
      username: values.username || undefined,
      password: values.password || undefined,
    };
    login(user).then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user);
          history.push("/");
        });
      } else {
      }
    });
  };

  return (
    <Card>
      <CardContent>
        <TextField
          id="username"
          type="text"
          label="Username"
          value={values.username}
          onChange={handleChange("username")}
        />
        <br />
        <TextField
          id="password"
          type="password"
          label="Password"
          value={values.password}
          onChange={handleChange("password")}
        />
      </CardContent>
      <CardActions>
        <Button color="primary" onClick={handleSubmitClick}>
          Login
        </Button>
      </CardActions>
    </Card>
  );
};
