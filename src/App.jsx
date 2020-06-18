import React, { useState } from "react";
import MainRouter from "./MainRouter";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./context/user";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import Themes from "./themes";

export default () => {
  const [user, setUser] = useState();

  return (
    <ThemeProvider theme={Themes.default}>
      <UserContext.Provider value={{ user, setUser }}>
        <CssBaseline />
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeProvider>
  );
};
