//===========
// Component to handle delete books
// PropType : <DeleteIcon id={book.id} title={title} authors={authors} logType="BookLog"/>

//===========

import React, { Component } from "react";
import { deleteBookLog, deleteDailyLog } from "../actions/deleteBookLog";
import { connect } from "react-redux";
import {
  IconButton,
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import { HighlightOffOutlined } from "@material-ui/icons";

class DeleteBookLog extends Component {
  state = { open: false };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onDeleteRequest = event => {
    event.preventDefault();
    // console.log(this.props.id);
    this.props.onDeleteBookLog({ id: this.props.id });
    this.setState({ open: false });
  };

  onDeleteDLRequest = event => {
    event.preventDefault();
    // console.log(this.props.id);
    this.props.onDeleteDailyLog({ id: this.props.id });
    this.setState({ open: false });
  };

  logTypeToDelete = logType => {
    if (logType === "DailyLog") {
      const { record1 } = this.props;
      return (
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {record1}
          </DialogContentText>
        </DialogContent>
      );
    } else {
      const { title, authors } = this.props;
      return (
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {title}
            <br />
            by {authors}
          </DialogContentText>
        </DialogContent>
      );
    }
  };

  render() {
    const { logType } = this.props;

    return (
      <>
        <IconButton onClick={this.handleClickOpen}>
          <HighlightOffOutlined size="small" />
        </IconButton>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure you want to delete?"}
          </DialogTitle>

          <DialogContent>
            {this.logTypeToDelete(logType)}
          </DialogContent>
          <DialogActions>
            <Button
              onClick={
                logType === "DailyLog"
                  ? this.onDeleteDLRequest
                  : this.onDeleteRequest
              }
              // variant="contained"
              color="primary"
              autoFocus
            >
              Delete
            </Button>
            <Button
              onClick={this.handleClose}
              // variant="contained"
              color="primary"
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onDeleteBookLog: bookID => dispatch(deleteBookLog(bookID)),
    onDeleteDailyLog: logID => dispatch(deleteDailyLog(logID))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(DeleteBookLog);
