import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Button,
  MenuItem,
  TextField,
  FormControlLabel,
  Switch
} from "@material-ui/core";
import "./AddBookDialog.css";
import LibraryAdd from "@material-ui/icons/LibraryAdd";
import addBookLogManual from "../actions/addBookLogManual";
import { connect } from "react-redux";

class AddBookDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      today: "",
      title: "",
      author: "",
      journal: "",
      startDate: "",
      endDate: "",
      imageURL: "",
      completed: false,
      pages: 0
    };
  }

  handleClickOpen = () => {
    const d = new Date();
    const today = `${d.toJSON().slice(0, 10)}`;
    this.setState({
      open: true,
      today: today,
      startDate: today,
      endDate: today
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

  handleCompleted(e) {
    const comp = !this.state.completed ? true : false;
    this.setState({
      completed: comp
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.onAddBook({
      bookLog: {
        title: this.state.title,
        author: this.state.author,
        category: "",
        pages: this.state.pages,
        journal: this.state.journal,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        completed: this.state.completed,
        imageURL:
          "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
        currency: "USD",
        price: 0
      }
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
                // onChange={this.handleTitleChange.bind(this)}
                onChange={this.handleChange("title")}
                // value={this.state.bookLog.title}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="author"
                label="Author"
                // onChange={this.handleAuthorChange.bind(this)}
                onChange={this.handleChange("author")}
                // value={this.state.bookLog.author}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="journal"
                label="Journal"
                // onChange={this.handleJournalChange.bind(this)}
                onChange={this.handleChange("journal")}
                // value={this.state.bookLog.journal}
                fullWidth
              />
              <div className="short">
                <TextField
                  required
                  id="startdate"
                  label="Start Date"
                  // onChange={this.handleStartDateChange.bind(this)}
                  onChange={this.handleChange("startDate")}
                  // value={this.state.bookLog.startDate}
                  defaultValue={this.state.today}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  id="enddate"
                  label="End Date"
                  // onChange={this.handleEndDateChange.bind(this)}
                  onChange={this.handleChange("endDate")}
                  // value={this.state.bookLog.endDate}
                  defaultValue={this.state.today}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="pages"
                  label="Total Pages"
                  type="number"
                  // onChange={this.handlePagesChange.bind(this)}
                  onChange={this.handleChange("pages")}
                  // value={this.state.bookLog.pages}
                  InputProps={{ inputProps: { min: 0 } }}
                />
              </div>
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.completed}
                    onChange={this.handleChange("completed")}
                    value="completed"
                    id="completed"
                  />
                }
                label="Finished Reading"
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
