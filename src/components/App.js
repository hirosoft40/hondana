import React, { Component } from "react";
import Home from "./bookLog/Home";
import AppBar from "./nav/AppBar";

class App extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <div style={{ padding: 2 }}>
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
