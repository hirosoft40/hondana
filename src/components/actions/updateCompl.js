const updateCompl = item => {
  // console.log("I am in action ", item);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("bookLog")
      .doc(item.id)
      .update({ completed: item.completed, endDate: item.endDate })
      .then(() => {
        dispatch({
          type: "UPDATE_COMPLETED",
          bookLog: item.completed
        });
      });
  };
};

export default updateCompl;
