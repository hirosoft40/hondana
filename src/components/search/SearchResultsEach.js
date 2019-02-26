import React from "react";
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";
import BottomIcons from "./BottomIcons";
import "./SearchResultsEach.css";
import { keys } from "@material-ui/core/styles/createBreakpoints";

const SearchResultsEach = ({ book, sale, onBookSelect }) => {
  if (!book) {
    return <div>Loading</div>;
  }

  return (
    <div onClick={() => onBookSelect(book)}>
      <Card className="card">
        <Grid
          spacing={0}
          container
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
        >
          <img
            alt={book.title}
            component="img"
            src={
              book.hasOwnProperty("imageLinks")
                ? book.imageLinks.smallThumbnail
                : ""
            }
            title={book.title}
          />
          <Grid item xs className="cardBody">
            <h4>{book.title}</h4>
            <span className="author">by {book.authors}</span>
            <p>
              {book.categories ? `${book.categories}` : ""}
              {book.pageCount ? ` - ${book.pageCount} pages` : ""}
              {sale.saleability === "FOR_SALE"
                ? ` - ${sale.listPrice.currencyCode}  ${sale.listPrice.amount} `
                : ""}
            </p>
          </Grid>
          <Grid item xs={1}>
            <BottomIcons book={book} sale={sale} />
            {/* <BottomIcons book={book} sale={sale} bookId={keys}/> */}
            {/* <SearchResultsEachIcon book={book} sale={sale} /> */}
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default SearchResultsEach;
