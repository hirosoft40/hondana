function logReducer(state, action) {
  if (state === undefined) {
    return {
      log: []
    };
  }

  const {
    id,
    title,
    author,
    category,
    pages,
    startDate,
    endDate,
    completed,
    image,
    currency,
    journal,
    price
  } = action.log;

  switch (action.type) {
    case "ADD_BOOK_SEARCH":
      return {
        ...state,
        log: state.log.concat({
          id,
          title,
          author,
          category,
          pages,
          startDate,
          endDate,
          completed,
          image,
          currency,
          journal,
          price
        })
      };
    case "ADD_BOOK_MANUAL":
      return {
        ...state,
        log: state.log.concat({
          title,
          author,
          pages,
          startDate,
          endDate,
          completed,
          journal
        })
      };
    default:
      return state;
  }
}

export default logReducer;
