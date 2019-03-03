import React from "react";
import { Favorite } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import updateBookLog from "../actions/updateBookLog";

class FavoriteIcon extends React.Component {
  state = {
    favorite: this.props.favorite,
    id: this.props.id
  };

  handleChange = event => {
    event.preventDefault();
    this.setState(prevState => ({
      favorite: !prevState.favorite
    }));
  };

  render() {
    return (
      <IconButton onClick={this.handleChange}>
        <Favorite color={this.state.favorite ? "error" : "inherit"} />
      </IconButton>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateFav: favStatus => dispatch(updateBookLog(favStatus))
  };
}

export default FavoriteIcon;

// export default compose(
//   connect(
//     null,
//     mapDispatchToProps
//   ),
//   firestoreConnect([{ collection: "bookLog" }])(FavoriteIcon)
// );
