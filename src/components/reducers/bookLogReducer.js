function bookLogReducer(state, action) {
  if (state === undefined) {
    return {
      bookLog: []
    };
  }

  const {
    bookid,
    title,
    author,
    category,
    pages,
    startDate,
    endDate,
    completed,
    imageURL,
    currency,
    price,
    journal,
    totalRead
  } = action.bookLog;

  switch (action.type) {
    case "ADD_BOOK_SEARCH":
      return {
        ...state,
        bookLog: state.bookLog.concat({
          bookid,
          title,
          author,
          category,
          pages,
          startDate,
          endDate,
          completed,
          imageURL,
          currency,
          price,
          journal,
          totalRead
        })
      };
    case "ADD_BOOKLOG_MANUAL":
      return {
        ...state,
        bookLog: state.bookLog.concat({
          bookid,
          title,
          author,
          category,
          pages,
          startDate,
          endDate,
          completed,
          imageURL,
          currency,
          price,
          journal,
          totalRead
        })
      };
    // case "SEARCH_RESULTS":
    //   return action.books;
    default:
      return state;
  }
}

export default bookLogReducer;
