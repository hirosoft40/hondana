import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import "./AddBookDialog.css";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import LibraryAdd from "@material-ui/icons/LibraryAdd";

class AddBookDialog extends React.Component {
  state = {
    open: false,
    maxWidth: "sm",
    today: "",
    newLog: {}
  };

  handleClickOpen = () => {
    const d = new Date();
    const today = `${d.toJSON().slice(0, 10)}`;
    this.setState({ open: true, today: today });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => event => {
    this.setState({
      newLog: {
        [name]: event.target.value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <MenuItem onClick={this.handleClickOpen} className="popText">
          <LibraryAdd className="popIcon" />
          Add to Book Log
        </MenuItem>
        <form onSubmit={this.handleSubmit}>
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
                onChange={this.handleChange(title)}
                value={this.state.title}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="author"
                label="Author"
                onChange={this.handleChange(author)}
                value={this.state.author}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="journal"
                label="Journal"
                onChange={this.handleChange(journal)}
                value={this.state.journal}
                fullWidth
              />
              <div className="short">
                <TextField
                  required
                  id="startdate"
                  label="Start Date"
                  onChange={this.handleChange(startDate)}
                  value={this.state.startDate}
                  defaultValue={this.state.today}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  id="enddate"
                  label="End Date"
                  onChange={this.handleChange(endDate)}
                  value={this.state.endDate}
                  defaultValue={this.state.today}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="pages"
                  label="No of Pages"
                  type="number"
                  onChange={this.handleChange(pages)}
                  value={this.state.pages}
                  InputProps={{ inputProps: { min: 0 } }}
                />
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleClose} color="primary">
                Add to Book Log
              </Button>
            </DialogActions>
          </Dialog>
        </form>
      </div>
    );
  }
}

function mapStateToProps (){
  
}

export default AddBookDialog;
