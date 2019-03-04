import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { Col } from "react-flexbox-grid";
import { firestoreConnect } from "react-redux-firebase";
import "./DailyLogRight.css";

function DailyLogRight({ dailyLog }) {
  if (!isLoaded(dailyLog)) {
    return <div>Loading....</div>;
  }

  if (isEmpty(dailyLog)) {
    return <div>You have not read this book yet.</div>;
  }

  const pastRecord = dailyLog.map((item, idx) => {
    // console.log("item", item);
    const { logDay, pgRead, minutesRead } = item.item;
    const histDay = logDay
      ? logDay
          .toDate()
          .toJSON()
          .slice(0, 10)
      : "";
    const record1 = `${histDay}: ${pgRead} pages(${minutesRead} mins)`;

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
    // console.log(props);
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
