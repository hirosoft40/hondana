export const addDailyLog = item => {
  // console.log(item);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    firestore
      .collection("dailyLog")
      .add({
        item,
        userId: userId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: "ADD_DAILY_LOG",
          dailyLog: item
        });
      })
      .catch(error => {
        console.log("ADD_DAILY_LOG_ERROR", error);
        dispatch({ type: "ADD_DAILY_LOG_ERROR" });
      });
  };
};
