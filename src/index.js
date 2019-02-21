import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Provider from 'react-redux';
import App from "./components/App";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#ffff8d" },
    secondary: {
      main: "#d1ff33"
    }
  }
});
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
