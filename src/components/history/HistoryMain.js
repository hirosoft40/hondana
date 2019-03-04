import React from "react";
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
import { firestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { compose } from "redux";

const mainGrid = "mainGrid";
const leftTable = "leftTable";
const rightChart = "rightChart";
ReactChartkick.addAdapter(Chart);

// class HistoryMain extends Component {
function HistoryMain({ dailyLog }) {
  if (!isLoaded(dailyLog)) {
    return <div>Loading...</div>;
  }

  if (isEmpty(dailyLog)) {
    return <p className="error">No Data Available</p>;
  }

  const renderList = dailyLog.map((item, idx) => {
    const { logDay, title, authors, pgRead, minutesRead } = item.item;
    const newLogDay = logDay
      ? logDay
          .toDate()
          .toJSON()
          .slice(0, 10)
      : "";

    // if (chartType === "table") {
    return (
      <TableRow key={idx} className="tablerow">
        <TableCell component="th" scope="row">
          {newLogDay}
        </TableCell>
        <TableCell align="right">{pgRead}</TableCell>
        <TableCell align="right">{minutesRead}</TableCell>
        <TableCell align="right">{title}</TableCell>
        <TableCell align="right">{authors}</TableCell>
      </TableRow>
    );
    // }
  });

  const renderChart = () => {
    let readTime = {},
      readPage = {};

    const chartData = !dailyLog
      ? ""
      : dailyLog.map(item => {
          const { logDay, pgRead, minutesRead } = item.item;
          const newLogDay = logDay
            ? logDay
                .toDate()
                .toJSON()
                .slice(0, 10)
            : "";
          readTime[newLogDay] = minutesRead;
          readPage[newLogDay] = pgRead;
        });

    const data = [
      { name: "Minutes Read", data: readTime },
      { name: "Pages Read", data: readPage }
    ];

    console.log("data", data);
    return <LineChart data={data} />;
  };

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
            <TableBody>{renderList}</TableBody>
          </Table>
        </div>
      </Grid>
      <Grid item xs={5} className="charts">
        <div className={rightChart}>
          <div>
            <h3>Pages and Minutes you read</h3>
          </div>
          {renderChart()}
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

function mapStateToProps(state) {
  return {
    dailyLog: state.firestore.ordered.dailyLog
      ? state.firestore.ordered.dailyLog
      : []
  };
}

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  firestoreConnect(props => {
    if (!props) return [];
    return [
      {
        collection: "dailyLog",
        queryParams: ["orderByChild=item.logDay.seconds"]
      }
    ];
  })
)(HistoryMain);
