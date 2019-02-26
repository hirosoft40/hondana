function dailyLogReducer(state, action) {
  console.log("action", action);
  console.log("reducer:state", state);

  if (state === undefined) {
    return {
      dailyLog: []
    };
  }
  const {
    dltitle,
    dlauthor,
    logDay,
    pgRead,
    minutesRead,
    totalRead,
    totalTime
  } = action.dailyLog;

  switch (action.type) {
    case "ADD_DAILY_LOG":
      return {
        ...state,
        dailyLog: state.dailyLog.concat({
          dltitle,
          dlauthor,
          logDay,
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

export default dailyLogReducer;
