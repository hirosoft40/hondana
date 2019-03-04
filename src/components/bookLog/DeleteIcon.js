import React, { Component } from "react";
import { deleteBookLog } from "../actions/deleteBookLog";
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
    console.log(this.props.id);
    this.props.onDeleteBookLog({ id: this.props.id });
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
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
            {"Are you sure you want to delete this book?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {this.props.title}
              <br />
              by {this.props.authors}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.onDeleteRequest}
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
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onDeleteBookLog: bookID => dispatch(deleteBookLog(bookID))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(DeleteBookLog);
