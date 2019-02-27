import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Menu, MenuItem } from "@material-ui/core";
import { Book, LibraryAdd, Add, Favorite } from "@material-ui/icons";
import "./BottomIcons.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { connect } from "react-redux";
import addBookLogManual from "../actions/addBookLogManual";
import { Link } from "react-router-dom";
class BottomIcons extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { book, sale } = this.props;
    const img = book.hasOwnProperty("imageLinks")
      ? book.imageLinks.smallThumbnail
      : "";
    const cat = book.categories ? book.categories : "";
    const pgCount = book.pageCount ? book.pageCount : "";
    const currencyCode =
      sale.saleability === "FOR_SALE" ? sale.listPrice : "USD";
    const amount = sale.saleability === "FOR_SALE" ? sale.listPrice : 0;
    // const d = new Date();
    // const today = `${d.toJSON().slice(0, 10)}`;

    return (
      <div className="buttomnav">
        <IconButton
          arial-label="Action"
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <Add />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem
            className="popText"
            onClick={() =>
              this.props.onAddBook(
                {
                  bookLog: {
                    // bookid: this.props.key,
                    title: this.props.book.title,
                    author: this.props.book.authors,
                    category: cat,
                    pages: pgCount,
                    journal: "",
                    startDate: new Date(),
                    endDate: "",
                    completed: false,
                    imageURL: img,
                    currency: currencyCode,
                    price: amount
                  }
                }
                // console.log("addFromSearch", bookLog)
              )
            }
          >
            <Link to={"/"} className="link">
              <LibraryAdd className="popIcon" />
              Add to Book Log
            </Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose} className="popText">
            <Favorite className="popIcon" />
            Add to Favorite
          </MenuItem>
          {typeof this.props.book.previewLink !== "undefined" ? (
            <MenuItem
              href={this.props.book.previewLink}
              target="_blank"
              className="popText"
            >
              <Book className="popIcon" />
              Preview the Book
            </MenuItem>
          ) : (
            ""
          )}
          {this.props.sale.saleability === "FOR_SALE" ? (
            <MenuItem
              href={this.props.sale.buyLink}
              target="_blank"
              className="popText"
            >
              <AddShoppingCartIcon className="popIcon" />
              Buy on GooglePlay
            </MenuItem>
          ) : (
            ""
          )}
        </Menu>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onAddBook: bookLog => dispatch(addBookLogManual(bookLog))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(BottomIcons);

// export default BottomIcons;
