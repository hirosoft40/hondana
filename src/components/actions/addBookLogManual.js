function addBookLogManual(item) {
  return {
    type: "ADD_BOOKLOG_MANUAL",
    bookLog: {
      bookid: item.bookLog.bookid,
      title: item.bookLog.title,
      author: item.bookLog.author,
      category: item.bookLog.category,
      pages: item.bookLog.pages,
      journal: item.bookLog.journal,
      startDate: item.bookLog.startDate,
      endDate: item.bookLog.endDate,
      completed: item.bookLog.completed,
      imageURL: item.bookLog.imageURL,
      currency: item.bookLog.currency,
      price: item.bookLog.price,
    }
  };
}
export default addBookLogManual;
