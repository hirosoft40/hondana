import React from "react";
import { Favorite } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { connect } from "react-redux";
import updateFavorite from "../actions/updateFavorite";

class FavoriteIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
      id: null
    };
  }

  componentDidMount() {
    this.setState({
      favorite: false
    });
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      favorite: this.state.favorite ? false : true
    });
    this.props.addFavorite({
      favorite: !this.state.favorite,
      id: this.props.id
    });
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
    addFavorite: data => dispatch(updateFavorite(data))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(FavoriteIcon);
