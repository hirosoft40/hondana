// import googleBooks from "../api/googleBooks";

// export const postBookData = search => async (dispatch, getState) => {
//   const searchWithoutSpace = search.replace(/\s/g, "+");
//   console.log(searchWithoutSpace)
//   const query = `?q={searchWithoutSpace}`;
//   console.log(query)

//   const response = await googleBooks.get(query);
//   console.log(response);
//   dispatch({ type: "POST_BOOK_DATA", payload: response.items });
// };
