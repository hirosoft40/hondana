function favoriteList(item) {
  return {
    type: "FAVORITE_LIST",
    bookLog: {
      bookid: item.bookLog.bookid,
      title: item.bookLog.title,
      author: item.bookLog.author,
      category: item.bookLog.category,
      pages: item.bookLog.pages,
      journal: item.bookLog.journal,
      startDate: item.startDate,
      endDate: item.bookLog.endDate,
      completed: item.bookLog.completed,
      imageURL: item.bookLog.imageURL,
      currency: item.bookLog.currency,
      price: item.bookLog.price,
    }
  };
}

export default favoriteList;
