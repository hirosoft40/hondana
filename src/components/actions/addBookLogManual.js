export const addBookLogManual = item => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("bookLog")
      .add({ item })
      .then(() => {
        // console.log("item.id",item.id);
        dispatch({
          type: "ADD_BOOKLOG_MANUAL",
          bookLog: item
        });
      });
  };
};
