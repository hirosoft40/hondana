import React, { Component } from "react";
import AppBar from "./AppBar";
import SignIn from "./SignIn";
import Tables from "./Tables";
import Search from "./Search";
import Grid from "@material-ui/core/Grid";

class App extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <Grid container spacint={24}>
          <Grid item xs={12} sm={6}>
            <Search />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Tables />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
