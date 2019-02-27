import React, { Component } from "react";
import { Grid, Row } from "react-flexbox-grid";
import "./BookLogMain.css";
import { AddCircle, Search, EditRounded } from "@material-ui/icons";
import { Menu, MenuItem, IconButton } from "@material-ui/core";
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

  renderList() {
    if (!this.props.bookLog) {
      return "";
    } else {
      return this.props.bookLog.map(book => {

        console.log(book.item.bookLog.startDate.toDate());
        const d = book.item.bookLog.startDate.toDate();
        const newStartDay = d.toJSON().slice(0, 10);
        // const newStartDay = "d.toJSON().slice(0, 10)";
        return (
          <div className="mainDiv">
            <div className="headerDiv">
              <img
                src={book.item.bookLog.imageURL}
                alt={book.item.bookLog.title}
              />

              <div className="iconDiv">
                <IconButton>
                  <EditRounded />
                </IconButton>
                <Dailylog
                  title={book.item.bookLog.title}
                  author={book.item.bookLog.author[0]}
                />
              </div>
            </div>
            <div className="bodyDiv">
              <div className="title">{book.item.bookLog.title}</div>
              <div>{book.item.bookLog.author[0]}</div>
              <div>
                {book.item.bookLog.pages
                  ? `${book.item.bookLog.pages} Pages`
                  : ""}
              </div>
              <div>Started Reading on {newStartDay} </div>
            </div>
          </div>
        );
      });
    }
  }

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
              <Link to="/search" className="link">
                <MenuItem onClick={this.handleClose} className="popText">
                  <Search className="popIcon" />
                  Search New Book
                </MenuItem>
              </Link>
            </Menu>
          </div>
          {this.renderList()}
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
