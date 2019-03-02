import React, { Component } from "react";
import SearchResultsList from "./SearchResultsList";
import googleBooks from "../apis/googleBooks";
import SearchBar from "./SearchBar";
import { Grid } from "@material-ui/core";
import AddBookDialog from "../bookLog/AddBookDialog";

const err = {
  color: "red",
  fontWeight: "bold"
};

const nothappy = {
  fontSize: "14px",
  color: "gray",
  fontStyle: "italic",
  marginTop: "10px",
  paddingTop: "10px",
  borderTop: "1px double gray"
};

class SearchMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.onSearchStart("");
  }
  // == not implemented yet
  onBookSelect = book => {
    this.setState({ bookSelected: book });
  };

  // ==== axios connecting to GOOGLE BOOK API
  onSearchStart = async searchQuery => {
    if (searchQuery.length > 0) {
      await googleBooks
        .get("/volumes", {
          params: {
            q: searchQuery
          }
        })
        .then(response => {
          if (response.data.totalItems > 0) {
            this.setState({
              books: response.data.items,
              totalItems: response.data.totalItems,
              error: false
            });
          } else {
            this.setState({
              error: true,
              errorMsg: `Sorry! No matching results. Try again with different wording.`
            });
          }
        })
        .catch(error => {
          this.setState({
            errorMsg: `Something Went Wrong: ${error}`,
            error: true
          });
        });
    }
  };

  renderList(res) {
    if (!res.error && res.totalItems > 0) {
      return (
        // showing search results
        <div>
          <SearchResultsList
            books={res.books}
            onBookSelect={this.onBookSelect}
          />

          <div style={nothappy}>
            Not happy with search results? Type in Manually.
            <AddBookDialog />
          </div>
        </div>
      );

      // for no search results
    } else if (res.error) {
      return (
        <h3 className="error" style={err}>
          {res.errorMsg}
          <br />
          <br />
          Or.... type in Book Detail manually.
          <AddBookDialog />
        </h3>
      );
    }
  }

  render() {
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <SearchBar handleSubmit={this.onSearchStart} />
        {this.renderList(this.state)}
      </Grid>
    );
  }
}

export default SearchMain;
