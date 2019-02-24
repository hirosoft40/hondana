import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./Home.css";
import { IconButton } from "@material-ui/core";
import { AddCircle, Search } from "@material-ui/icons";
import { Menu, MenuItem } from "@material-ui/core";
import AddBookDialog from "./AddBookDialog";
import { Link } from "react-router-dom";

class Home extends Component {
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
              <MenuItem
                onClick={this.handleClose}
                className="popText"
                containerElement={<Link to="/search" />}
              >
                <Search className="popIcon" />
                Search New Book
              </MenuItem>
            </Menu>
          </div>
        </Row>
      </Grid>
    );
  }
}

export default Home;
