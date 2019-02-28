function bookLogReducer(state, action) {
  if (state === undefined) {
    return {
      bookLog: []
    };
  }

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

    // case "DELETE_BOOKLOG":
    //   const updatedArray = state.bookLog.filter(item => {
    //     return item.bookLog.title !== action.bookLog.title;
    //   });
    //   return {
    //     ...state,
    //     bookLog: updatedArray
    //   };

    default:
      return state;
  }
}

export default bookLogReducer;
