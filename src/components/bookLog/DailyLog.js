import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Button,
  TextField,
  IconButton,
  FormControlLabel,
  Switch
} from "@material-ui/core";
import { addDailyLog } from "../actions/addDailyLog";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import "./DailyLog.css";
import BookLogMain from "./BookLogMain";

const d = new Date();
const logDay = `${d.toJSON().slice(0, 10)}`;

class DailyLog extends React.Component {
  // constructor(props) {
  //   super(props);
  state = { open: false, completed: false, errorText: "" };

  onClickOpen = () => {
    const { dltitle, dlauthor } = this.props;
    this.setState({
      open: true,
      logDay,
      dltitle,
      dlauthor
    });
  };

  onClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => event => {
    // if((name==="pgRead" || name==="minutesRead") && event.target.value<0)
    // return this.setState({errorText :"Number must be greater than 0" })
    // else if(name==='logDay' && typeof event.target.value !==)

    // } else {

    // }
    this.setState({
      [name]: event.target.value
    });
  };

  onSubmitDailyLog = event => {
    event.preventDefault();

    this.props.onDailyLogAdd({ ...this.state, bookId: this.props.bookId });
    this.setState({
      open: false
    });
  };

  handleCompleted = e => {
    if (this.state.completed) return;
    this.setState({
      completed: true
    });
  };

  render() {
    const {
      open,
      dltitle,
      dlauthor,
      logDay,
      completed,
      errorText
    } = this.state;

    return (
      <div>
        <IconButton onClick={this.onClickOpen}>
          <FontAwesomeIcon icon={faBook} />
        </IconButton>
        <form>
          <Dialog
            open={open}
            onClose={this.onClose}
            className="mainDialog_daily"
            aria-labelledby="form-dialog-dltitle"
          >
            <DialogTitle className="dialogtitle" id="form-dialog-dltitle">
              {dltitle}
              <br />
              by {dlauthor}
            </DialogTitle>
            <DialogContent className="dialog_daily">
              <TextField
                required
                id="logDay"
                label="Log Date"
                error={errorText.length > 0 ? true : false}
                helperText={errorText}
                onChange={this.handleChange("logDay")}
                defaultValue={logDay}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <div>
                <TextField
                  autoFocus
                  margin="dense"
                  id="pgRead"
                  label="Pages read "
                  type="number"
                  // error={errorText.length > 0 ? true : false}
                  helperText={errorText}
                  defaultValue={0}
                  onChange={this.handleChange("pgRead")}
                  InputProps={{ inputProps: { min: 0 } }}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="minutesRead"
                  label="Minutes read"
                  type="number"
                  // error={errorText.length > 0 ? true : false}
                  helperText={errorText}
                  defaultValue={0}
                  onChange={this.handleChange("minutesRead")}
                  InputProps={{ inputProps: { min: 0 } }}
                />
              </div>
              <FormControlLabel
                control={
                  <Switch
                    checked={completed}
                    onChange={this.handleCompleted}
                    value={completed}
                    id="completed"
                  />
                }
                label="Finished Reading"
              />
              <TextField
                autoFocus
                margin="dense"
                id="journal"
                label="Journal"
                onChange={this.handleChange("journal")}
                fullWidth
              />
              <div className="short">
                <TextField
                  required
                  id="startdate"
                  label="Start Date"
                  onChange={this.handleChange("startDate")}
                  defaultValue={this.state.today}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  id="enddate"
                  label="End Date"
                  onChange={this.handleChange("endDate")}
                  defaultValue={this.state.today}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </div>
            </DialogContent>

            <DialogActions>
              <Button onClick={this.onClose} color="primary">
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

DailyLog.propTypes = {
  logDay: PropTypes.instanceOf(Date),
  pgRead: PropTypes.number,
  minutesRead: PropTypes.number
};

function mapDispatchToProps(dispatch) {
  return {
    onDailyLogAdd: dailyLog => dispatch(addDailyLog(dailyLog))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(DailyLog);
