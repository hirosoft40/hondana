import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Menu, MenuItem } from "@material-ui/core";
import { Book, LibraryAdd, Add, Favorite } from "@material-ui/icons";
import "./BottomIcons.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { connect } from "react-redux";
import { addBookLogManual } from "../actions/addBookLogManual";
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

  renderList() {
    const { anchorEl } = this.state;
    const { book, sale } = this.props;
    const { saleability, buyLink } = this.props.sale;
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
              this.props.onAddBook({
                ...book,
                ...sale,
                startDate: new Date()
              })
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
          {typeof book.previewLink !== "undefined" ? (
            <MenuItem
              className="popText"
            >
              <a href={book.previewLink}
                rel="noopener noreferrer"
                target="_blank">
                <Book className="popIcon" />
                Preview the Book
              </a>
            </MenuItem>
          ) : (
              ""
            )}

          {saleability === "FOR_SALE" ? (
            <MenuItem href={buyLink} target="_blank" className="popText">
              <a href={buyLink}
                rel="noopener noreferrer"
                target="_blank">
                <AddShoppingCartIcon className="popIcon" />
                Buy on GooglePlay
              </a>
            </MenuItem>
          ) : (
              ""
            )}
        </Menu>
      </div>
    );
  }

  render() {
    return <div>{this.renderList()}</div>;
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
