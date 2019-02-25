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

  const {
    dltitle,
    dlauthor,
    logday,
    pgRead,
    minutesRead,
    totalRead,
    totalTime
  } = action.dailyLog;

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
          journal
        })
      };
    case "ADD_BOOKLOG_MANUAL":
      return {
        ...state,
        bookLog: state.bookLog.concat({
          logday,
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
    case "ADD_DAILY_LOG":
      return {
        ...state,
        dailyLog: state.dailyLog.concat({
          dltitle,
          dlauthor,
          logday,
          pgRead,
          minutesRead,
          totalRead,
          totalTime
        })
      };
    default:
      return state;
  }
}

export default bookLogReducer;
