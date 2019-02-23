import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { ShoppingBasket, Book, LibraryAdd, Block } from "@material-ui/icons";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./BottomIcons.css";

class BottomIcons extends React.Component {
  state = {
    value: 'booklog',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="buttomnav">
        <BottomNavigation value={value} onChange={this.handleChange} showLabels>
          <BottomNavigationAction
            size="small"
            label="BookLog"
            value="booklog"
            icon={<LibraryAdd />}
          />
          <BottomNavigationAction
            size="small"
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
          />
          {typeof this.props.book.previewLink !== "undefined" ? (
            // <a href={this.props.book.previewLink} target="_blank">
              <BottomNavigationAction
                label="Preview"
                size="small"
                value="preview"
                icon={<Book />}
              />
            // </a>
          ) : (
            ""
          )}
          {this.props.sale.saleability === "FOR_SALE" ? (
            // <a href={this.props.sale.salesInfo.buyLink} target="_blank">
              <BottomNavigationAction
                label="Purchase"
                size="small"
                value="purchase"
                color="inherit"
                icon={<ShoppingBasket />}
              />
            // </a>
          ) : (
            ""
          )}
        </BottomNavigation>
      </div>
    );
  }
}

export default BottomIcons;
