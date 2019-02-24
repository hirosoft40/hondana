function addLogManual(item) {
  return {
    type: "ADD_LOG_MANUAL",
    log: {
      title: item.title,
      author: item.author,
      journal: item.journal,
      startDate: item.startDate,
      endDate: item.endDate,
      completed: item.completed,
      pages: item.pages
    }
  };
}
export default addLogManual;
