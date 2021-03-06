export const deleteBookLog = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("bookLog")
      .doc(id.id)
      .delete()
      .then(() => {
        dispatch({
          type: "DELETE_BOOKLOG",
          bookLog: id
        });
      })
      .catch(error => {
        console.log("DELETE_BOOKLOG_ERROR", error);
      });
  };
};

export const deleteDailyLog = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("dailyLog")
      .doc(id.id)
      .delete()
      .then(() => {
        dispatch({
          type: "DELETE_DAILYLOG",
          dailyLog: id
        });
      })
      .catch(error => {
        console.log("DELETE_DAILYLOG_ERROR", error);
      });
  };
};