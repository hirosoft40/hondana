import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Button,
  MenuItem,
  TextField
} from "@material-ui/core";
import "./AddBookDialog.css";
import LibraryAdd from "@material-ui/icons/LibraryAdd";
import addBookLogManual from "../actions/addBookLogManual";
import { connect } from "react-redux";

const d = new Date();
const today = `${d.toJSON().slice(0, 10)}`;

class AddBookDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
      today: today
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAddBook({
      ...this.state,
      imageLinks: {
        smallThumbnail:
          "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
      },
      listPrice: { amount: 0, currencyCode: "USD" },
      startDate: this.state.today
    });
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <div>
        <MenuItem
          onClick={this.handleClickOpen}
          onClose={this.handleClose}
          className="popText"
        >
          <LibraryAdd className="popIcon" />
          Add to Book Log
        </MenuItem>
        <form>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            className="mainDialog"
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle className="dialogtitle" id="form-dialog-title">
              Add Book Information
            </DialogTitle>
            <DialogContent className="dialog">
              <TextField
                required
                autoFocus
                margin="dense"
                id="title"
                label="Title"
                onChange={this.handleChange("title")}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="authors"
                label="Author"
                onChange={this.handleChange("author")}
                fullWidth
              />

              <TextField
                autoFocus
                margin="dense"
                id="pageCount"
                label="Total Pages of this book"
                type="number"
                onChange={this.handleChange("pages")}
                InputProps={{ inputProps: { min: 0 } }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleSubmit} color="primary">
                Add to Book Log
              </Button>
            </DialogActions>
          </Dialog>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAddBook: bookLog => dispatch(addBookLogManual(bookLog))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(AddBookDialog);

// export default AddBookDialog;
