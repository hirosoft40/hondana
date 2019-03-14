//=============
// Component to handle user completed reading the book
//=============

import React, { Component } from "react";
import { Done } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { connect } from "react-redux";
import updateCompl from "../actions/updateCompl";

class CompletedIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
      id: this.props.id
    };
  }

  handleCompleted = e => {
    e.preventDefault();

    this.setState(prevState => ({
      completed: !prevState.completed
    }));
    this.props.addCompl({
      completed: !this.state.completed,
      endDate: !this.state.completed ? new Date() : null,
      id: this.props.id
    });
  };

  render() {
    return (
      <IconButton onClick={this.handleCompleted}>
        <Done color={this.state.completed ? "error" : "inherit"} />
      </IconButton>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addCompl: data => dispatch(updateCompl(data))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(CompletedIcon);
