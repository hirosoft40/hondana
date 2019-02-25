import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import SearchMain from "./components/search/SearchMain";
import BookLogMain from "./components/bookLog/BookLogMain";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { createStore, applyMiddleware } from "redux";
import bookLogReducer from "./components/reducers/bookLogReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import thunk from "redux-thunk";

const store = createStore(
  bookLogReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
console.log(store);

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
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      {/* <BrowserRouter> */}
      <App />
      {/* <Switch>
          <Route exact path="/" component={BookLogMain} />
          <Route path="/search" component={SearchMain} />
        </Switch>
      </BrowserRouter> */}
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
