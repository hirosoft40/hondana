import React from "react";
import PropTypes from "prop-types";
import DailyLogRight from "./DailyLogRight";
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Button,
  TextField,
  IconButton,
  Grid
} from "@material-ui/core";
import { addDailyLog } from "../actions/addDailyLog";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import "./DailyLog.css";
import { Row, Col } from "react-flexbox-grid";

const d = new Date();
const logDay = `${d.toJSON().slice(0, 10)}`;

class DailyLog extends React.Component {
  state = { open: false, completed: false, errorText: "" };

  onClickOpen = () => {
    const { title, authors } = this.props;
    this.setState({
      open: true,
      logDay,
      title,
      authors
    });
  };

  isValidDate(dateString) {
    let regEx = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString.match(regEx)) return false; // Invalid format
    let dt = new Date(dateString);
    if (Number.isNaN(dt.getTime())) return false; // Invalid date
    return d.toISOString().slice(0, 10) === dateString;
  }

  onClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  onSubmitDailyLog = event => {
    event.preventDefault();
    // error handling
    if (!this.state.logDay || this.state.logDay === "") {
      this.setState({
        errorText: "Please fill in Log Date."
      });
      return;
    }
    if (!this.isValidDate(this.state.logDay)) {
      this.setState({
        errorText: "Invalid Log Date. Format should be YYYY-MM-DD"
      });
      return;
    }

    this.props.onDailyLogAdd({
      ...this.state,
      logDay: new Date(this.state.logDay),
      bookId: this.props.id
    });
    this.setState({
      open: false
    });
  };

  handleCompleted = e => {
    e.preventDefault();
    this.setState(prevState => ({
      completed: !prevState.completed
    }));
  };

  render() {
    const { open, title, authors, logDay } = this.state;

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
            aria-labelledby="form-dialog-title"
          >
            <p className="error">{this.state.errorText}</p>

            <Grid>
              <Row className="firstRow">
                <DialogTitle className="dialogtitle" id="form-dialog-title">
                  {title}
                  <br />
                  by {authors}
                </DialogTitle>
              </Row>
              <Row className="midRow">
                <Col className="leftCol">
                  <DialogContent className="dialog_daily">
                    <TextField
                      required
                      id="logDay"
                      label="Log Date"
                      onChange={this.handleChange("logDay")}
                      defaultValue={logDay}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />

                    <TextField
                      autoFocus
                      margin="dense"
                      id="pgRead"
                      label="Pages read "
                      type="number"
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
                      defaultValue={0}
                      onChange={this.handleChange("minutesRead")}
                      InputProps={{ inputProps: { min: 0 } }}
                    />

                    <TextField
                      autoFocus
                      margin="dense"
                      id="journal"
                      label="Journal"
                      multiline={true}
                      rows={5}
                      rowsMax={7}
                      onChange={this.handleChange("journal")}
                      fullWidth
                    />
                  </DialogContent>
                </Col>
                <DailyLogRight id={this.props.id} className="rightCol" />
              </Row>
              <Row className="lastRow">
                <DialogActions>
                  <Button onClick={this.onClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={this.onSubmitDailyLog} color="primary">
                    Add to Daily Log
                  </Button>
                </DialogActions>
              </Row>
            </Grid>
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
