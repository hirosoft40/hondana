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
    journal
  } = action.bookLog;

  switch (action.type) {
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
          journal
        })
      };
   
    default:
      return state;
  }
}

export default bookLogReducer;
