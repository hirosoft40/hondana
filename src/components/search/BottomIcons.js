import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Menu, MenuItem } from "@material-ui/core";
import { Book, LibraryAdd, Add, Favorite } from "@material-ui/icons";
import "./BottomIcons.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

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

export default BottomIcons;
