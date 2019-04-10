export const addBookLogManual = item => {
  // console.log(item)
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    firestore
      .collection("bookLog")
      .add({
        item:{...item},
        userId: userId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: "ADD_BOOKLOG_MANUAL",
          bookLog: item
        });
      });
  };
};
