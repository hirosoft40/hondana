import React from "react";
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";
import BottomIcons from "./BottomIcons";
import "./SearchResultsEach.css";

const SearchResultsEach = ({ book, sale, onBookSelect }) => {
  let { title, authors, categories, pageCount, imageLinks } = book;
  let { saleability, listPrice } = sale;

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
            alt={title}
            component="img"
            src={
              book.hasOwnProperty("imageLinks") ? imageLinks.smallThumbnail : ""
            }
            title={title}
          />
          <Grid item xs className="cardBody">
            <h4>{title}</h4>
            <span className="authors">by {authors}</span>
            <p>
              {categories ? `${categories}` : ""}
              {pageCount ? ` - ${pageCount} pages` : ""}
              {saleability === "FOR_SALE"
                ? ` - ${listPrice.currencyCode}  ${listPrice.amount} `
                : ""}
            </p>
          </Grid>
          <Grid item xs={1}>
            <BottomIcons book={book} sale={sale}  />
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default SearchResultsEach;
