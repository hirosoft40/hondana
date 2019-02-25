function addBookLogManual(item) {
  return {
    type: "ADD_BOOKLOG_MANUAL",
    bookLog: {
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
export default addBookLogManual;
