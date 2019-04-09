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
          // dailyLog: id.id
          dailyLog: id
        });
      })
      .catch(error => {
        console.log("DELETE_BOOKLOG_ERROR", error);
        // dispatch({ type: "DELETE_BOOKLOG_ERROR" });
      });
  };
};
