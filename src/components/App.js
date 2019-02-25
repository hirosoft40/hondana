import React, { Component } from "react";
import BookLogMain from "./bookLog/BookLogMain";
import AppBar from "./nav/AppBar";

class App extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <div style={{ padding: 2 }}>
          <BookLogMain />
        </div>
      </div>
    );
  }
}

export default App;
