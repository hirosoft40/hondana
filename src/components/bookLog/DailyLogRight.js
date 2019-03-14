import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { Col } from "react-flexbox-grid";
import "./DailyLogRight.css";
import moment from "moment";

function DailyLogRight({ dailyLog }) {
  if (!isLoaded(dailyLog)) {
    return <div>Loading....</div>;
  }

  if (isEmpty(dailyLog)) {
    return <p className="error">You have not read this book yet.</p>;
  }

  const pastRecord = dailyLog.map((item, idx) => {
    const { logDay, pgRead } = item.item;
    const minutesRead = item.item.minutesRead ? `(${item.item.minutesRead} mins)` : "";
    const histDay = logDay
      ? moment(logDay.toDate().toJSON()).format("YYYY-MM-DD")
      : "";
    const record1 = `${histDay}: ${pgRead} pages ${minutesRead}`;

    return (
      <div key={idx}>
        <ul key={idx} className="ulRecord">
          <li key={idx}>{record1}</li>
        </ul>
      </div>
    );
  });

  return (
    <Col className="data">
      <p>Record of this book</p>
      {pastRecord}
    </Col>
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
    console.log(props)
    if (!props.id) return [];
    return [
      {
        collection: "dailyLog",
        //queryParams:['equalTo=']
        where: [[`item.bookId`, "==", props.id]]
      }
    ];
  })
)(DailyLogRight);
