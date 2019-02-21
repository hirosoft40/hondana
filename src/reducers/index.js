export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return aciton.payload;
    default:
      return state;
  }
};
