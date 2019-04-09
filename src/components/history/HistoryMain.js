import React from "react";
import "./HistoryMain.css";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import MUIDataTable from "mui-datatables";
import { Redirect } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Chart from "chart.js";
import ReactChartkick, { LineChart, ColumnChart } from "react-chartkick";

const mainGrid = "mainGrid";
// const leftTable = "leftTable";
const rightChart = "rightChart";
ReactChartkick.addAdapter(Chart);

function HistoryMain({ dailyLog, auth }) {
  // firebase auth to check login info
  if (!auth.uid) return <Redirect to="/signin" />;

  if (!isLoaded(dailyLog)) {
    return <div>Loading...</div>;
  }

  if (isEmpty(dailyLog)) {
    return <p className="error">No Data Available</p>;
  }

  // For Data Table
  let dataArray = [];
  const columns = ["Date", "Pages", "Minutes", "Title", "Author"];
  // const options = { resizableColumns: true };

  // === creating data for data Table
  dailyLog.forEach((item, idx) => {
    const { logDay, title, authors, pgRead, minutesRead } = item.item;
    const newLogDay = logDay
      ? logDay
          .toDate()
          .toJSON()
          .slice(0, 10)
      : "";
    dataArray.push([newLogDay, pgRead, minutesRead, title, authors]);
    // return dataArray
  });

  const renderChart = () => {
    let readTime = {},
      readPage = {};
    if (dailyLog) {
      dailyLog.forEach(item => {
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
    } else return;
    // const chartData = !dailyLog
    //   ? ""
    //   : dailyLog.forEach(item => {
    //       const { logDay, pgRead, minutesRead } = item.item;
    //       const newLogDay = logDay
    //         ? logDay
    //             .toDate()
    //             .toJSON()
    //             .slice(0, 10)
    //         : "";
    //       readTime[newLogDay] = minutesRead;
    //       readPage[newLogDay] = pgRead;
    //     });

    const data = [
      { name: "Minutes Read", data: readTime },
      { name: "Pages Read", data: readPage }
    ];

    // console.log("data", data);
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
          {/* <h3>List of Books You Read</h3> */}
          <MUIDataTable
            title={"List of Book Read"}
            data={dataArray}
            columns={columns}
            // options={options}
          />
        </div>
      </Grid>
      <Grid item xs={5} className="charts">
        <div className={rightChart}>
          <div>
            <h3>Pages and Minutes you read</h3>
          </div>
          {renderChart()}
        </div>
        {/* <div className={rightChart}>
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
        </div> */}
      </Grid>
    </Grid>
  );
}

function mapStateToProps(state) {
  // console.log(state);
  return {
    dailyLog: state.firestore.ordered.dailyLog
      ? state.firestore.ordered.dailyLog
      : [],
    auth: state.firebase.auth
  };
}

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  firestoreConnect(props => {
    if (!props.auth.uid) return [];
    return [
      {
        collection: "dailyLog",
        where: [[`userId`, "==", props.auth.uid]],
        queryParams: ["orderByChild=logDay"]
      }
    ];
  })
)(HistoryMain);
