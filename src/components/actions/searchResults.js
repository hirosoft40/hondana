import googleBooks from "../apis/googleBooks";

export const searchResults = searchQuery => async (dispatch, getState) => {
  const response = await googleBooks.get("/volumes", {
    params: {
      q: searchQuery
    }
  });
console.log(response)
  dispatch({ type: "SEARCH_BOOKS", books: response.data.items });
};

// export const searchBooks = () => async (dispatch, getState) => {
//   const response = await googleBooks.get("/posts",);
//   dispatch({ type: "SEARCH_BOOKS", payload: response.data });
// };
//   const response = await googleBooks.get("/volume",);
//   dispatch({ type: "SEARCH_BOOKS", books: response });
// };
// function searchResults(item) {
//   return {
//     type: "SEARCH_RESULTS",
//     books: item
//   };
// }

// export default searchResults;
