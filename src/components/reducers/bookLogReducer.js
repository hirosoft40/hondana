function bookLogReducer(state, action) {
  if (state === undefined) {
    return {
      bookLog: []
    };
  }

  // const {
  //   bookid,
  //   title,
  //   author,
  //   category,
  //   pages,
  //   journal,
  //   startDate,
  //   endDate,
  //   completed,
  //   imageURL,
  //   currency,
  //   price
  // } = action.bookLog;

  switch (action.type) {
    case "ADD_BOOKLOG_MANUAL":
      return {
        ...state,
        bookLog: state.bookLog.concat({
          // bookid: action.bookLog.bookid,
          title: action.bookLog.title,
          author: action.bookLog.author,
          category: action.bookLog.category,
          pages: action.bookLog.pages,
          journal: action.bookLog.journal,
          startDate: action.bookLog.startDate,
          endDate: action.bookLog.endDate,
          completed: action.bookLog.completed,
          imageURL: action.bookLog.imageURL,
          currency: action.bookLog.currency,
          price: action.bookLog.price
        })
      };

    default:
      return state;
  }
}

export default bookLogReducer;
