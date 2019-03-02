function dailyLogReducer(state, action) {
  if (state === undefined) {
    return {
      dailyLog: []
    };
  }

  switch (action.type) {
    case "ADD_DAILY_LOG":
      return {
        ...state,
        dailyLog: state.dailyLog.concat(action.dailyLog)
      };
    case "ADD_DAILY_LOG_ERROR":
      console.log("create project error");
      return state;
    default:
      return state;
  }
}

export default dailyLogReducer;
