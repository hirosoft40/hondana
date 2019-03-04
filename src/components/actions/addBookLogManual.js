export const addBookLogManual = item => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("bookLog")
      .add({ item })
      .then(() => {
        dispatch({
          type: "ADD_BOOKLOG_MANUAL",
          bookLog: item
        });
      });
  };
};
