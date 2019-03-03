const updateFavorite = item => {
  // console.log("I am in action ", item);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("bookLog")
      .doc(item.id)
      .update({ favorite: item.favorite })
      .then(() => {
        dispatch(
          {
          type: "UPDATE_FAVORITE",
          favorite: item.favorite,
          id:item.id
        });
      });
  };
};

export default updateFavorite;
