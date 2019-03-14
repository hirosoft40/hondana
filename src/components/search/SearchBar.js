import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import "./SearchBar.css";
import Fab from "@material-ui/core/Fab";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchQuery: "" };
  }

  // === searchQuery
  handleChange = event => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSubmit = event => {
    //== ok
    event.preventDefault();
    this.props.handleSubmit(this.state.searchQuery);
  };

  render() {
    return (
      <div className="search">
        <h1>Search Books</h1>
        <form onSubmit={this.handleSubmit}>
          <InputBase
            className="searchBar"
            type="text"
            name="search"
            placeholder="Which book are you looking for?"
            value={this.state.searchQuery}
            onChange={this.handleChange.bind(this)}
          />
          <Fab
            aria-label="Search"
            onClick={this.handleSubmit}
            className="searchbaricon"
          >
            <SearchIcon className="white" />
          </Fab>
        </form>
      </div>
    );
  }
}

export default SearchBar;
