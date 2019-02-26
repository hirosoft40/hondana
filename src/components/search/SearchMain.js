import React, { Component } from "react";
import SearchResultsList from "./SearchResultsList";
import googleBooks from "../apis/googleBooks";
import SearchBar from "./SearchBar";
import { Grid } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
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

    this.state = {
      books: [],
      isLoading: true,
      errorMsg: "",
      error: false,
      bookSelected: null,
      totalItems: 0
    };
  }

  componentDidMount() {
    this.onSearchStart("");
  }

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

  renderList() {
    if (!this.state.error && this.state.totalItems > 0) {
      return (
        <div>
          <SearchResultsList
            books={this.state.books}
            onBookSelect={this.onBookSelect}
          />

          <div style={nothappy}>
            Not happy with search results? Type in Manually.
            <AddBookDialog />
          </div>
        </div>
      );
    } else if (this.state.error) {
      return (
        <h3 className="error" style={err}>
          {this.state.errorMsg}
          <br />
          <br />
          Or.... type in Book Detail manually.
          <AddBookDialog />
        </h3>
      );
    }
  }

  onBookSelect = book => {
    this.setState({ bookSelected: book });
  };

  render() {
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <SearchBar handleSubmit={this.onSearchStart} />
        {this.renderList()}
        {/* </Grid>
        <Grid item xs>
        <p>Cound not find the book? Register manually.</p>
        </Grid> */}
      </Grid>
    );
  }
}

export default SearchMain;
