import React, { Component } from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import googleBooks from "../api/googleBooks";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      loading:true
    };
  }

  componentDidMount() {
    this.onQuerySubmit();
  }

  onQuerySubmit = (query="james+and ") => {
      fetch(`https://www.googleapis.com/books/v1/volumes/?q=${query}`)
      .then(response=>response.json())
      .then(res =>{
          console.log(res.items);
          this.setState({
              books:res.items
          })
      })
  };

  render() {
    return (
      <div>
        <Search onFormSubmit={this.onQuerySubmit()} />
        <div>{this.state.books}</div>
      </div>
    );
  }
}

export default Results;
