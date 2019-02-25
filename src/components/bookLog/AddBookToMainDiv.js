import React, { Component } from "react";
import "./AddBookToMainDiv.css";
import { IconButton } from "@material-ui/core";
import { EditRounded } from "@material-ui/icons";

const style = () => ({
  newBook: {
    marginLeft: 0
  }
});

const AddBookToMainDiv = props => {
  const divclass = "aa" ? "addBookManual" : "addBookSearch";
  return (
    <div className="mainDiv">
      <div className="headerDiv">
        <div className="addBookManual">
          {/* <div>test</div>
          <div>test</div>
          <div>stpages</div> */}
        </div>
        <div className="iconDiv">
          <IconButton>
            <EditRounded />
          </IconButton>
        </div>
      </div>
      <div className="bodyDiv">
        <div className="title">{props.title}</div>
        <div>{props.author}</div>
        <div>{props.pages} Pages</div>
        <div>Started Reading on {props.startDate} </div>
      </div>
    </div>
  );
};

export default AddBookToMainDiv;
