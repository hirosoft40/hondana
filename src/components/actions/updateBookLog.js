const updateBookLog = (item, id) => {
  console.log("this is book detail",item)
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("bookLog")
      .doc(id)
      .set(item.favorite)
      .then(() => {
        dispatch({
          type: "UPDATE_BOOKLOG",
          bookLog: item.favorite
        });
      });
  };
};

export default updateBookLog;
