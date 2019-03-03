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
import ReactChartkick, { LineChart, ColumnChart } from "react-chartkick";
import Chart from "chart.js";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const mainGrid = "mainGrid";
const leftTable = "leftTable";
const rightChart = "rightChart";
ReactChartkick.addAdapter(Chart);

class HistoryMain extends Component {
  renderList() {
    return !this.props.dailyLog
      ? ""
      : this.props.dailyLog.map((item, idx) => {
          // console.log(item);
          //   const d = item.dailyLog.logDay.toDate();
          //   const newLogDay = d.toJSON().slice(0, 10);
          //   return (
          //     <TableRow key={idx} className="tablerow">
          //       <TableCell component="th" scope="row">
          //         {newLogDay}
          //       </TableCell>
          //       <TableCell align="right">{item.dailyLog.pgRead}</TableCell>
          //       <TableCell align="right">{item.dailyLog.minutesRead}</TableCell>
          //       <TableCell align="right">{item.dailyLog.dltitle}</TableCell>
          //       <TableCell align="right">{item.dailyLog.dlauthor}</TableCell>
          //     </TableRow>
          //   );
        });
  }

  renderChart() {
    let readTime = {},
      readPage = {};

    const chartdata = !this.props.dailyLog
      ? ""
      : this.props.dailyLog.map(item => {
          const d = item.dailyLog.logDay.toDate();
          const newLogDay = d.toJSON().slice(0, 10);
          readTime[newLogDay] = item.dailyLog.minutesRead;
          readPage[newLogDay] = item.dailyLog.pgRead;
        });

    const data = [
      { name: "Minutes Read", data: chartdata.readTime },
      { name: "Pages Read", data: chartdata.readPage }
    ];
    console.log(data)
    // return <LineChart data={data} />;
  }

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="space-between"
        className={mainGrid}
      >
        <Grid item xs={7}>
          <div>
            <h3>List of Books You Read</h3>
            <Table className={leftTable}>
              <colgroup>
                <col style={{ width: "25%" }} />
                <col style={{ width: "2%" }} />
                <col style={{ width: "2%" }} />
                <col style={{ width: "46%" }} />
                <col style={{ width: "25%" }} />
              </colgroup>

              <TableHead style={{ backgroundColor: "#f5f5f5" }}>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Pages</TableCell>
                  <TableCell>Minutes</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Author</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{this.renderList()}</TableBody>
            </Table>
          </div>
        </Grid>
        <Grid item xs={5} className="charts">
          <div className={rightChart}>
            <div>
              <h3>Pages and Minutes you read</h3>
            </div>
            {this.renderChart()}
          </div>
          <div className={rightChart}>
            <div>
              <h3>No of books by months</h3>
            </div>
            <ColumnChart
              data={[
                ["May", 54],
                ["Jun", 90],
                ["Jul", 70],
                ["Aug", 80],
                ["Sep", 40],
                ["Oct", 32],
                ["Nov", 46],
                ["Dec", 28],
                ["Jan", 32],
                ["Feb", 46],
                ["Mar", 28]
              ]}
            />
          </div>
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  // console.log("historystate", state);
  return {
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
