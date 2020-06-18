import React, { useState, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import isLoggedIn from "./auth-helper";
import { register } from "./api-auth";
import {
  Card,
  CardContent,
  TextField,
  CardActions,
  Button,
  Typography,
} from "@material-ui/core";
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
    setValueInValues(name, event.target.value);
  };

  const setValueInValues = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmitClick = () => {
    const user = {
      username: values.username || undefined,
      password: values.password || undefined,
    };
    register(user)
      .then((response) => {
        if (response.ok) {
          response.json().then((user) => {
            setUser(user);
            history.push("/");
          });
        } else {
          response.text().then((text) => {
            setValueInValues("error", text);
          });
        }
      })
      .catch((err) => {
        setValueInValues("error", err);
      });
  };

  return isLoggedIn() ? (
    <Redirect to="/" />
  ) : (
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
        <br />
        {values.error && (
          <Typography component="p" color="error">
            {values.error}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button color="primary" onClick={handleSubmitClick}>
          Register
        </Button>
      </CardActions>
    </Card>
  );
};
