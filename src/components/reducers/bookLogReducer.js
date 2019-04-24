function bookLogReducer(state, action) {
  // console.log("state", state);
  // console.log("action", action);
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
    // case "UPDATE_FAVORITE":
    //   // const addFav = state.bookLog.filter(item => {
    //   //   return state.bookLog.id === action.bookLog.id;
    //   // });

    //   return {
    //     ...state,
    //     bookLog: state.bookLog.concat({

    //       favorite: action.favorite
    //     })
    //   };

    // case "UPDATE_COMPLETED":
    //   return {
    //     ...state,
    //     id: action.id,
    //     bookLog: state.bookLog.concat({
    //       completed: action.completed,
    //       endDate: action.endDate
    //     })
    //   };
    case "DELETE_BOOKLOG":
      const afterDelete = state.bookLog.filter(item => {
        return item.id !== action.bookLog.id;
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
