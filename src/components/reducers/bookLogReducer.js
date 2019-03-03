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
    case "UPDATE_FAVORITE":
      let updatedBookLog = state.bookLog.filter(item => {
        return state.bookLog.id === action.bookLog.id;
      });
      console.log("updatedBooklog", updatedBookLog);
      return {
        ...state,
        bookLog: state.bookLog.concat(updatedBookLog)
      };

    // case "UPDATE_COMPLETED":
    //   return {
    //     ...state,
    //     bookLog: state.bookLog.concat(action.bookLog)
    //   };
    case "DELETE_BOOKLOG":
      const afterDelete = state.bookLog.filter(od => {
        return state.bookLog.id !== action.bookLog.id;
      });
      return {
        ...state,
        bookLog: afterDelete
      };
    // case "DELETE_BOOKLOG_ERROR":
    //   console.log("delete booklog error");
    //   return state;

    default:
      return state;
  }
}

export default bookLogReducer;
