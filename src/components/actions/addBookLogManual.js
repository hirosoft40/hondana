export const addBookLogManual = item => {
  // console.log("this is book detail",item)
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

