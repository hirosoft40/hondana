import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import SearchMain from "./components/search/SearchMain";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./components/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import thunk from "redux-thunk";
import BaseLayout from "./components/BaseLayout";
import HistoryMain from "./components/history/HistoryMain";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

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
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/search" component={SearchMain} />
            <Route path="/history" component={HistoryMain} />
          </Switch>
        </BaseLayout>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
