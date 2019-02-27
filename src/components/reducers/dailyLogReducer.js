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
        dailyLog: state.dailyLog.concat({
          dltitle: action.dailyLog.dltitle,
          dlauthor: action.dailyLog.dlauthor,
          logDay: action.dailyLog.logDay,
          pgRead: action.dailyLog.pgRead,
          minutesRead: action.dailyLog.minutesRead,
          totalRead: action.dailyLog.totalRead,
          totalTime: action.dailyLog.totalTime
        })
      };
    case "ADD_DAILY_LOG_ERROR":
      console.log("create project error");
      return state;
    default:
      return state;
  }
}

export default dailyLogReducer;
