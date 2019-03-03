import React, { Component } from "react";
import { Done } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

class CompletedIcon extends Component {
  state = {
    completed: this.props.completed,
    id: this.props.id
  };

  handleCompleted = e => {
    e.preventDefault();
    this.setState(prevState => ({
      completed: !prevState.completed,
      endDate: new Date()
    }));
  };

  render() {
    return (
      <IconButton onClick={this.handleCompleted}>
        <Done color={this.state.completed ? "error" : "inherit"} />
      </IconButton>
    );
  }
}

export default CompletedIcon;
