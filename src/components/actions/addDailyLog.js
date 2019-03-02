export const addDailyLog = item => {
  // console.log(item);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("dailyLog")
      .add({ item })
      .then(() => {
        dispatch({
          type: "ADD_DAILY_LOG",
          dailyLog: item
        });
      })
      .catch(error => {
        dispatch({ type: "ADD_DAILY_LOG_ERROR", error });
      });
  };
};
