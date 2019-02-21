import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import "./Search.css";
import Fab from "@material-ui/core/Fab"

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { author: "", title: "", isbn: "" };
  }

  onAuthorChange = event => {
    this.setState({
      author: event.target.value
    });
  };

  onTitleChange = event => {
    this.setState({
      title: event.target.value
    });
  };

  onIsbnChange = event => {
    this.setState({
      isbn: event.target.value
    });
  };

  onSearchSubmit = event => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state);
  };

  render() {
    return (
      <div className="container search">
        <h1>Search books </h1>
        <form >
          <input
            type="text"
            name="author"
            placeholder="Author"
            onChange={this.onAuthorChange}
          />
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={this.onTitleChange}
          />
          <input
            type="text"
            placeholder="ISBN"
            name="isbn"
            onChange={this.onIsbmChange}
          />
          <Fab aria-label="Search" color="primary" onClick={this.onSearchSubmit}>
            <SearchIcon />
          </Fab>
        </form>
      </div>
    );
  }
}


export default Search;
