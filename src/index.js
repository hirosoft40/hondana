import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "./components/App";
import AppBar from "./components/nav/AppBar";
import SearchMain from "./components/search/SearchMain";
import Home from "./components/bookLog/Home";
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
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={SearchMain} />
      </div>
    </Router>
    {/* <App /> */}
  </MuiThemeProvider>,
  // </Provider>,
  document.getElementById("root")
);
