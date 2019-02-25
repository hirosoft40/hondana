import React from "react";
import AppBar from "./nav/AppBar";

class BaseLayout extends React.Component {
  render() {
    return (
      <div>
        <AppBar />
        {this.props.children}
      </div>
    );
  }
}
export default BaseLayout;
