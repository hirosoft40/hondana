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

    case "DELETE_BOOKLOG":
      const updatedArray = state.bookLog.filter(od => {
        return state.bookLog.id !== action.bookLog.id;
      });
      return {
        ...state,
        bookLog: updatedArray
      };
    // case "DELETE_BOOKLOG_ERROR":
    //   console.log("delete booklog error");
    //   return state;

    default:
      return state;
  }
}

export default bookLogReducer;
