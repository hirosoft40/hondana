import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";
import BottomIcons from "./BottomIcons";
import "./BookItem.css";

const BookItem = ({ book, sale, onBookSelect }) => {
  if (!book) {
    return <div>Loading</div>;
  }
  // console.log("sale", sale);
  return (
    <div onClick={() => onBookSelect(book)}>
      <Card className="card">
        <img
          component="img"
          src={
            book.hasOwnProperty("imageLinks")
              ? book.imageLinks.smallThumbnail
              : ""
          }
          title={book.title}
        />
        <div className="cardBody">
          <h4>
            {book.title}
            <br />
            by {book.authors}
          </h4>
          <p>
            {book.categories ? `${book.categories}` : ""}
            {book.pageCount ? ` - ${book.pageCount} pages` : ""}
            {sale.saleability === "FOR_SALE"
              ? ` - ${sale.listPrice.currencyCode}  ${sale.listPrice.amount} `
              : ""}
          </p>
          <Grid item container small>
            <BottomIcons book={book} sale={sale} />
          </Grid>
        </div>
      </Card>
    </div>
  );
};

export default BookItem;
