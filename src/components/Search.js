import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import "./Search.css";
import Fab from "@material-ui/core/Fab";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  onInputChange = event => {
    this.setState({ query: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.query);
  };

  render() {
    return (
      <div className="container search">
        <h1>Search books </h1>
        <form onSubmit={this.onFormSubmit}>
          <InputBase
            className="searchBar"
            type="text"
            name="search"
            placeholder="Which book are you looking for?"
            onChange={this.onInputChange}
          />
          <Fab aria-label="Search" color="primary">
            <SearchIcon />
          </Fab>
        </form>
      </div>
    );
  }
}

export default Search;
