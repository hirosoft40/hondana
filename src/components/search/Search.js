import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import "./Search.css";
import Fab from "@material-ui/core/Fab";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { searchQuery: "" };
  }

  // === searchQuery
  handleChange = event => {
    this.setState({ searchQuery: event.target.value });
    // console.log(this.state.searchQuery);
    // const qWithoutSpace =
    //   event.target.value.indexOf(" ") >= 0
    //     ? event.target.value.split(" ").join("+")
    //     : event.target.value;
    // this.setState({ searchQuery: qWithoutSpace });
  };

  handleSubmit = event => {
    //== ok
    event.preventDefault();
    this.props.handleSubmit(this.state.searchQuery);
  };

  render() {
    return (
      <div className="search">
        <h1>Search books </h1>
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
            color="primary"
            onClick={this.handleSubmit}
          >
            <SearchIcon />
          </Fab>
        </form>
      </div>
    );
  }
}

export default Search;
