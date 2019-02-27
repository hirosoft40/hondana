import React, { Component } from "react";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import "./HistoryMain.css";
import { connect } from "react-redux";
import ReactChartkick, { LineChart } from "react-chartkick";
import Chart from "chart.js";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const mainGrid = "mainGrid";
const leftTable = "leftTable";
const rightChart = "rightChart";
ReactChartkick.addAdapter(Chart);

class HistoryMain extends Component {
  renderList() {
    return (
      <Table className={leftTable}>
        <colgroup>
          <col style={{ width: "25%" }} />
          <col style={{ width: "2%" }} />
          <col style={{ width: "2%" }} />
          <col style={{ width: "46%" }} />
          <col style={{ width: "25%" }} />
        </colgroup>

        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Pages</TableCell>
            <TableCell>Minutes</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!this.props.dailyLog
            ? ""
            : this.props.dailyLog.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell component="th" scope="row">
                    {item.dailyLog.logDay}
                  </TableCell>
                  <TableCell align="right">{item.dailyLog.pgRead}</TableCell>
                  <TableCell align="right">
                    {item.dailyLog.minutesRead}
                  </TableCell>
                  <TableCell align="right">{item.dailyLog.dltitle}</TableCell>
                  <TableCell align="right">
                    {item.dailyLog.dlauthor[0]}
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    );
  }

  renderChart() {
    let readTime = new Object(),
      readPage = new Object();
    const chartdata = !this.props.dailyLog
      ? ""
      : this.props.dailyLog.map(item => {
          // console.log("renderChartItem", item);
          readTime[item.dailyLog.logDay] = item.dailyLog.minutesRead;
          readPage[item.dailyLog.logDay] = item.dailyLog.pgRead;
        });


    const data = [
      { name: "Minutes Read", data: readTime },
      { name: "Pages Read", data: readPage }
    ];
    return <LineChart data={data} />;
  }

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="space-between"
        className={mainGrid}
      >
        <Grid item xs={7} className={leftTable}>
          <div>{this.renderList()}</div>
        </Grid>
        <Grid item xs={5} className={rightChart}>
          <div>
            <h3>Daily Chart</h3>
          </div>
          {this.renderChart()}
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  // console.log("state", state);
  // console.log("state.firebase", state.firestore.ordered.dailyLog);
  return {
    // dailyLog: state.dailyLog.dailyLog
    dailyLog: state.firestore.ordered.dailyLog
  };
}

// export default connect(
//   mapStateToProps,
//   null
// )(HistoryMain);

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "dailyLog" }])
)(HistoryMain);