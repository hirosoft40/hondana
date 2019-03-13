import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import SearchMain from "./components/search/SearchMain";
import FavoritesLists from "./components/bookLog/FavoritesLists";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./components/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import thunk from "redux-thunk";
import BaseLayout from "./components/BaseLayout";
import HistoryMain from "./components/history/HistoryMain";
import { getFirestore, reduxFirestore } from "redux-firestore";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import fbConfig from "../src/config/fbConfig";
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)
  )
);

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "#26a69a",
      ligth: "#64d8cb",
      dark: "#00766c"
    },
    secondary: {
      main: "#ffee58",
      light: "#ffff8b",
      dark: "#c9bc1f"
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
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signout" component={SignUp} />
            {/* <Route path="/favorites" component={FavoritesLists} /> */}
          </Switch>
        </BaseLayout>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
