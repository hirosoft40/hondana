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
      console.log("Add daily log error");
      return state;
    case "DELETE_DAILYLOG":
      const afterDelete = state.dailyLog.filter(item => {
        return item.id !== action.dailyLog.id;
      });
      return {
        ...state,
        dailyLog: afterDelete
      };
    default:
      return state;
  }
}

export default dailyLogReducer;
