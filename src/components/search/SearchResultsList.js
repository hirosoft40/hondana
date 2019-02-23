import React, { Component } from "react";
import BookItem from "./BookItem";
import { Grid } from "@material-ui/core";

const style = () => ({
  booklist: {
    padding: 2
  }
});

const SearchResultsList = ({ books, onBookSelect }) => {
  // console.log("searchResults",books)
  const bookList = books.map(book => {
    return (
      <Grid
        container
        key={book.id}
        spacing={16}
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item xs={12}>
          <BookItem
            className={style.booklist}
            key={book.id}
            onBookSelect={onBookSelect}
            book={book.volumeInfo}
            sale={book.saleInfo}
          />
        </Grid>
      </Grid>
    );
  });

  return <div>{bookList}</div>;
};

export default SearchResultsList;
