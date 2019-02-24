import React, { Component } from "react";
import SearchResultsList from "./SearchResultsList";
import googleBooks from "../apis/googleBooks";
import SearchBar from "./SearchBar";
import { Grid } from "@material-ui/core";

class SearchMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      isLoading: true,
      error: false,
      bookSelected: null
    };
  }

  componentDidMount() {
    this.onSearchStart("");
  }

  onSearchStart = async searchQuery => {
    if (searchQuery.length > 0) {
      const response = await googleBooks.get("/volumes", {
        params: {
          q: searchQuery
        }
      });
      this.setState({
        books: response.data.items
      });
    }
    // console.log(this.state.books);
  };

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

        <SearchResultsList
          books={this.state.books}
          onBookSelect={this.onBookSelect}
        />
      </Grid>
    );
  }
}

export default SearchMain;
