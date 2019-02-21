export default (state = [], action) => {
  switch (action.type) {
    case "POST_BOOK_DATA":
      return action.payload;
    default:
      return state;
  }
};
