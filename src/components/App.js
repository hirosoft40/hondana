import React, { Component } from "react";
import BookLogMain from "./bookLog/BookLogMain";
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="d">
        <div style={{ padding: 2 }}>
          <BookLogMain />
        </div>
      </div>
    );
  }
}

export default App;
