function bookLogReducer(state, action) {
  if (state === undefined) {
    return {
      bookLog: []
    };
  }

  const {
    id,
    title,
    author,
    category,
    pages,
    startDate,
    endDate,
    completed,
    image,
    currency,
    journal,
    price
  } = action.bookLog;

  switch (action.type) {
    case "ADD_BOOK_SEARCH":
      return {
        ...state,
        bookLog: state.bookLog.concat({
          id,
          title,
          author,
          category,
          pages,
          startDate,
          endDate,
          completed,
          image,
          currency,
          journal,
          price
        })
      };
    case "ADD_BOOKLOG_MANUAL":
      return {
        ...state,
        bookLog: state.bookLog.concat({
          title,
          author,
          journal,
          startDate,
          endDate,
          completed,
          pages
        })
      };
    // case "SEARCH_RESULTS":
    //   return action.books;
    default:
      return state;
  }
}

export default bookLogReducer;
