function dailyLogReducer(state, action) {
  console.log("dailyLogReducer, action", action);
  console.log("dailyLogReducer", state)


  if (state === undefined) {
    return {
      dailyLog: []
    };
  }
  // const {
  //   dltitle,
  //   dlauthor,
  //   logDay,
  //   pgRead,
  //   minutesRead,
  //   totalRead,
  //   totalTime
  // } = action.dailyLog;

  switch (action.type) {
    case "ADD_DAILY_LOG":
      return {
        ...state,
        dailyLog: state.dailyLog.concat({
          dltitle:action.dailyLog.dltitle,
          dlauthor:action.dailyLog.dlauthor,
          logDay:action.dailyLog.logDay,
          pgRead:action.dailyLog.pgRead,
          minutesRead:action.dailyLog.minutesRead,
          totalRead:action.dailyLog.totalRead,
          totalTime:action.dailyLog.totalTime
        })
      };
    default:
      return state;
  }
}

export default dailyLogReducer;
