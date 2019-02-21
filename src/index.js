import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "./reducers";

const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

const theme = createMuiTheme({
  palette: {
    primary: { main: "#ffff8d" },
    secondary: {
      main: "#d1ff33"
    }
  }
});
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
