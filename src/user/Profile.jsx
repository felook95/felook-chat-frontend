import React, { useState, useEffect } from "react";
import { Box, Avatar, Backdrop, CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { getLoggenInUserProfile } from "./api-user";

export default () => {
  const [user, setUser] = useState();
  const history = useHistory();

  useEffect(() => {
    getLoggenInUserProfile()
      .then((response) => {
        if (response.ok) {
          response.json().then((json) => {
            setUser(json);
          });
        } else {
          throw new Error();
        }
      })
      .catch(() => {
        history.push("/");
      });
  }, [history]);

  return (
    <Box>
      {user ? (
        <Box>
          <Box>{user.firstName}</Box>
          <Box>{user.lastName}</Box>
          <Avatar src={user.profileImage}>
            {user.firstName[0].toUpperCase()}
          </Avatar>
        </Box>
      ) : (
        <Backdrop open={true}>
          <CircularProgress />
        </Backdrop>
      )}
    </Box>
  );
};
