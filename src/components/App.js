import React, { Component } from "react";
import BookLogMain from "./bookLog/BookLogMain";

class App extends Component {
  render() {
    return (
      <div>
        <div style={{ padding: 2 }}>
          <BookLogMain />
        </div>
      </div>
    );
  }
}

export default App;
