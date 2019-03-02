import React, { Component } from "react";
import { Grid, Row } from "react-flexbox-grid";
import "./BookLogMain.css";
import { AddCircle, Search, EditRounded, Delete } from "@material-ui/icons";
import {
  Menu,
  MenuItem,
  IconButton
} from "@material-ui/core";
import AddBookDialog from "./AddBookDialog";
import { Link } from "react-router-dom";
import addBookLogManual from "../actions/addBookLogManual";
import { connect } from "react-redux";
import Dailylog from "./DailyLog";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

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

  editClick = event => {
    alert("EDIT..... THIS FUNCTION IS NOT YET AVAILABLE...Soon....");
  };

  onClick = event => {
    alert("DEEEELEEET..... THIS FUNCTION IS NOT YET AVAIABLE ");
  };

  renderList(books) {
    if (!books) {
      return "";
    } else {
      return books.map((book, idx) => {
        return (
          <div className="mainDiv" key={idx} id={book.id}>
            <div className="headerDiv">
              <img
                src={book.item.imageLinks.smallThumbnail}
                alt={book.item.title}
              />

              <div className="iconDiv">
                <IconButton onClick={this.editClick}>
                  <EditRounded />
                </IconButton>
                <Dailylog
                  dltitle={book.item.title}
                  dlauthor={book.item.authors}
                  bookId={book.id}
                />
                <IconButton onClick={this.onClick}>
                  <Delete />
                </IconButton>
              </div>
            </div>
            <div className="bodyDiv">
              <div className="title">{book.item.title}</div>
              <div>{book.item.authors}</div>
              <div>
                {/* Read "" pages of{" "} */}
                {book.item.pageCount
                  ? `${book.item.pageCount} Pages`
                  : "the book"}
              </div>
              {/* <div>Started Reading on {newStartDay} </div> */}
            </div>
          </div>
        );
      });
    }
  }

  render() {
    const { anchorEl } = this.state;

    return (
      <Grid>
        <Row className="row">
          {this.renderList(this.props.bookLog)}
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
              <Link to="/search" className="link">
                <MenuItem onClick={this.handleClose} className="popText">
                  <Search className="popIcon" />
                  Search New Book
                </MenuItem>
              </Link>
            </Menu>
          </div>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    bookLog: state.firestore.ordered.bookLog
  };
}

export default compose(
  connect(
    mapStateToProps,
    { addBookLogManual }
  ),
  firestoreConnect([{ collection: "bookLog" }])
)(BookLogMain);
