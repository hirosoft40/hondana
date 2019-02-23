import React, { Component } from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import AppBar from "./components/nav/AppBar";
import Tables from "./components/bookLog/Tables";
// import combineReducers from "./reducers";

import thunk from "redux-thunk";
// import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { Grid } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

// const store = createStore(
//   combineReducers,
//   composeWithDevTools(applyMiddleware(thunk))
// );

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "#0052D4",
      dark: "#0277bd",
      light: "#58a5f0"
    },
    secondary: {
      main: "#ffff00",
      light: "#ffff5a",
      dark: "#fdd835"
    }
  }
});
ReactDOM.render(
  // <Provider store={store}>
  <MuiThemeProvider theme={theme}>
    <AppBar />
    <Grid container spacing={24}>
      <Grid container item xs={12} md={6}>
        <App />
      </Grid>
      <Grid item xs={12} md={6}>
        <Tables />
      </Grid>
    </Grid>
  </MuiThemeProvider>,
  // </Provider>,
  document.getElementById("root")
);
