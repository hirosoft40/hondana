function addDailyLog(item) {
  console.log("item", item);
  return {
    type: "ADD_DAILY_LOG",
    dailyLog: {
      dltitle: item.dailyLog.dltitle,
      dlauthor: item.dailyLog.dlauthor,
      logDay: item.dailyLog.logDay,
      pgRead: item.dailyLog.pgRead,
      minutesRead: item.dailyLog.minutesRead,
      totalRead: item.dailyLog.totalRead,
      totalTime: item.dailyLog.totalTime
    }
  };
}
export default addDailyLog;
