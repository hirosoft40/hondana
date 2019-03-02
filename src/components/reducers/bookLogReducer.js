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
        bookLog: state.bookLog.concat(action.bookLog)
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
