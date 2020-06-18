import React from "react";
import { Link, withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import isLoggedIn from "../auth/auth-helper";
import LogoutButton from "../auth/LogoutButton";
import { Box, IconButton, AppBar, Toolbar } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

export default withRouter(({ history }) => {
  const isActive = (path) => {
    return history.location.pathname === path;
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton>
          <HomeIcon />
        </IconButton>
        {isLoggedIn() ? (
          <Box>
            {!isActive("/profile") && <Link to="/profile">Profile</Link>}
            <LogoutButton />
          </Box>
        ) : (
          <Box>
            <Link to="/login">
              <Button>Log In</Button>
            </Link>
            <Link to="/register">
              <Button>Register</Button>
            </Link>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
});
