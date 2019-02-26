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
    console.log("bookLog",this.props.bookLog)
  //   return this.props.bookLog.map(book => {
  //     console.log("book",book);
  //     return (
  //       <div className="mainDiv">
  //         <div className="headerDiv">
  //           <img src={book.imageURL} alt={book.title} />

  //           <div className="iconDiv">
  //             <IconButton>
  //               <EditRounded />
  //             </IconButton>
  //             <Dailylog title={book.title} author={book.author} />
  //           </div>
  //         </div>
  //         <div className="bodyDiv">
  //           <div className="title">{book.title}</div>
  //           <div>{book.author}</div>
  //           <div>{book.pages} Pages</div>
  //           <div>Started Reading on {book.startDate} </div>
  //         </div>
  //       </div>
  //     );
  //  });
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
  console.log("state", state.bookLog);
  return {
    bookLog: state.bookLog
  };
}

export default connect(
  mapStateToProps,
  { addBookLogManual }
)(BookLogMain);

// export default BookLogMain;
