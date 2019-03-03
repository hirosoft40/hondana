import React from "react";
import SearchResultsEach from "./SearchResultsEach";
import { Grid } from "@material-ui/core";

const style = () => ({
  booklist: {
    padding: 2
  }
});

const SearchResultsList = ({ books, onBookSelect }) => {
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
          <SearchResultsEach
            className={style.booklist}
            key={book.id}
            onBookSelect={onBookSelect}
            id={book.id}
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
