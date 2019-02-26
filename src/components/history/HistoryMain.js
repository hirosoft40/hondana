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

const mainGrid = "mainGrid";
const leftTable = "leftTable";
const rightChart = "rightChart";
ReactChartkick.addAdapter(Chart);

class HistoryMain extends Component {
  renderList() {
    return (
      <Table>
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
          {this.props.dailyLog.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell component="th" scope="row">
                {item.logDay}
              </TableCell>
              <TableCell align="right">{item.pgRead}</TableCell>
              <TableCell align="right">{item.minutesRead}</TableCell>
              <TableCell align="right">{item.dltitle}</TableCell>
              <TableCell align="right">{item.dlauthor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }

  renderChart() {
    let readTime = new Object(),
      readPage = new Object();
    this.props.dailyLog.forEach(item => {
      readTime[item.logDay] = item.minutesRead;
      readPage[item.logDay] = item.pgRead;
    });

    console.log("readTime", readTime);
    console.log("readPage", readPage);
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
          <div>In here Line Charts</div>
          {this.renderChart()}
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    dailyLog: state.dailyLog.dailyLog
  };
}

export default connect(
  mapStateToProps,
  null
)(HistoryMain);
