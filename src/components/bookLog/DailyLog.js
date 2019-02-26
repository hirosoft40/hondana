import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Button,
  TextField,
  // FormControlLabel,
  // Switch,
  IconButton
} from "@material-ui/core";
import addDailyLog from "../actions/addDailyLog";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import "./DailyLog.css";

class DailyLog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      dltitle: "",
      dlauthor: "",
      logDay: "",
      pgRead: 0,
      minutesRead: 0,
      totalRead: 0,
      totalTime: 0
    };
  }

  onClickOpen = () => {
    const d = new Date();
    const today = `${d.toJSON().slice(0, 10)}`;
    this.setState({
      open: true,
      logDay: today,
      dltitle: this.props.title,
      dlauthor: this.props.author
    });
  };

  onClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  // handleCompleted(e) {
  //   const comp = !this.state.completed ? true : false;
  //   this.setState({
  //     completed: comp
  //   });
  // }

  onSubmitDailyLog = event => {
    event.preventDefault();
    this.props.onDailyLogAdd({
      dailyLog: {
        dltitle: this.state.dltitle,
        dlauthor: this.state.dlauthor,
        pgRead: this.state.pgRead,
        journal: this.state.journal,
        logDay: this.state.logDay,
        minutesRead: this.state.minutesRead,
        totalRead: this.state.totalRead,
        totalTime: this.state.totalTime
      }
    });
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <div>
        <IconButton onClick={this.onClickOpen}>
          <FontAwesomeIcon icon={faBook} />
        </IconButton>
        <form>
          <Dialog
            open={this.state.open}
            onClose={this.onClose}
            className="mainDialog_daily"
            aria-labelledby="form-dialog-dltitle"
          >
            <DialogTitle className="dialogtitle" id="form-dialog-dltitle">
              {this.state.dltitle}
              <br />
              by {this.state.dlauthor}
            </DialogTitle>
            <DialogContent className="dialog_daily">
              <TextField
                required
                id="logDay"
                label="Log Date"
                // onChange={this.handleStartDateChange.bind(this)}
                onChange={this.handleChange("logDay")}
                // value={this.state.dailyLog.startDate}
                defaultValue={this.state.logDay}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="pgRead"
                label="Pages you read today"
                type="number"
                // onChange={this.handlePagesChange.bind(this)}
                onChange={this.handleChange("pgRead")}
                // value={this.state.dailyLog.pages}
                InputProps={{ inputProps: { min: 0 } }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="minutes"
                label="Minutes you read today"
                type="number"
                // onChange={this.handlePagesChange.bind(this)}
                onChange={this.handleChange("minutesRead")}
                // value={this.state.dailyLog.pages}
                InputProps={{ inputProps: { min: 0 } }}
              />
              {/* <FormControlLabel
                control={
                  <Switch
                    checked={this.state.completed}
                    onChange={this.handleChange("completed")}
                    value="completed"
                    id="completed"
                  />
                }
                label="Finished Reading"
              /> */}
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.onSubmitDailyLog} color="primary">
                Add to Daily Log
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
    onDailyLogAdd: dailyLog => dispatch(addDailyLog(dailyLog))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(DailyLog);