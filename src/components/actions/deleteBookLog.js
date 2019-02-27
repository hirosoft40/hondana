export const deleteBookLog = item => {
  // console.log(item);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("dailyLog")
      .delete({
        ...item
      })
      .then(() => {
        dispatch({
          type: "ADD_DAILY_LOG",
          dailyLog: {
            dltitle: item.dailyLog.dltitle,
            dlauthor: item.dailyLog.dlauthor,
            logDay: item.dailyLog.logDay,
            pgRead: item.dailyLog.pgRead,
            minutesRead: item.dailyLog.minutesRead,
            totalRead: item.dailyLog.totalRead,
            totalTime: item.dailyLog.totalTime
          }
        });
      })
      .catch(error => {
        dispatch({ type: "ADD_DAILY_LOG_ERROR", error });
      });
  };
};
