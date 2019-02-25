import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./BookLogMain.css";
import { IconButton } from "@material-ui/core";
import { AddCircle, Search } from "@material-ui/icons";
import { Menu, MenuItem } from "@material-ui/core";
import AddBookDialog from "./AddBookDialog";
import { Link } from "react-router-dom";

class BookLogMain extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  renderDiv = () => {};

  render() {
    const { anchorEl } = this.state;

    return (
      <Grid container>
        <Row className="row">
          <div className="sample">
            <IconButton
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <AddCircle />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <AddBookDialog />
              <Link to="/search">
                <MenuItem onClick={this.handleClose} className="popText">
                  <Search className="popIcon" />
                  Search New Book
                </MenuItem>
              </Link>
            </Menu>
          </div>
          {/* <AddBookToMainDiv /> */}
        </Row>
      </Grid>
    );
  }
}

export default BookLogMain;
