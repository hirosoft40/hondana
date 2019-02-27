function addBookLogManual(item) {
  return {
    type: "ADD_BOOKLOG_MANUAL",
    bookLog: {
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
      price: item.bookLog.price
    }
  };
}
export default addBookLogManual;

// export const addBookLogManual = item => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     const firestore = getFirestore();
//     firestore
//       .collection("bookLog")
//       .add({ item })
//       .then(() => {
//         dispatch({
//           type: "ADD_BOOKLOG_MANUAL",
//           bookLog: {
//             title: item.bookLog.title,
//             author: item.bookLog.author,
//             category: item.bookLog.category,
//             pages: item.bookLog.pages,
//             journal: item.bookLog.journal,
//             startDate: item.bookLog.startDate,
//             endDate: item.bookLog.endDate,
//             completed: item.bookLog.completed,
//             imageURL: item.bookLog.imageURL,
//             currency: item.bookLog.currency,
//             price: item.bookLog.price
//           }
//         });
//       });
//   };
// };
