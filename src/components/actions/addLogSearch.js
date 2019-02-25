function addBookSearch(item) {
  return {
    type: "ADD_BOOK_SEARCH",
    bookLog: {
      bookid: item.bookid,
      title: item.title,
      author: item.author,
      category: item.category,
      pages: item.pages,
      startDate: item.startDate,
      endDate: item.endDate,
      completed: item.completed,
      imageURL: item.imageURL,
      currency: item.currency,
      price: item.price,
      journal: item.journal
    }
  };
}

export default addBookSearch;
