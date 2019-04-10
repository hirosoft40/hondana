import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Avatar, IconButton, Typography, MenuItem, Menu } from "@material-ui/core";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import MoreIcon from "@material-ui/icons/MoreVert";
import "./AppBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faBookReader, faUserPlus, faSignInAlt, faSignOutAlt, faChartLine } from "@fortawesome/free-solid-svg-icons";
import {
  SearchRounded,
  // Favorite,
  Search,
  AccountCircle,
} from "@material-ui/icons";
import { connect } from 'react-redux';
import { signOut } from '../actions/authActions'


const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: 'center'
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

class PrimarySearchAppBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };
  handleLogOut = () => {
    this.handleMenuClose();
    this.props.signOut();
  }

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes, auth, profile } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const links = !auth.uid ?
      <MenuItem onClick={this.handleMenuClose}>
        <Link to={"/signin"} style={{ textDecoration: "none" }}>
          SignIn <FontAwesomeIcon icon={faSignInAlt} style={{ marginLeft: "5" }} />
        </Link>
      </MenuItem>
      :
      <MenuItem onClick={this.handleLogOut}>
        SignOut <FontAwesomeIcon icon={faSignOutAlt} style={{ marginLeft: "5" }} />
      </MenuItem>;

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        {links}
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <SearchRounded />
            <p>Search Books</p>
          </IconButton>
          <IconButton color="inherit">
            <FontAwesomeIcon icon={faChartLine} />
            <p>My Book List</p>
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    const showIconsWhenLoggedIn = auth.uid ?
      (<React.Fragment>
        <Link to={"/"} className="link white">
          <IconButton color="inherit">
            <FontAwesomeIcon icon={faBookReader} />
          </IconButton>
        </Link>
        {/* <IconButton className="link white" disabled>
                <Favorite />
              </IconButton> */}
        <Link to={"/history"} className="link white">
          <IconButton color="inherit">
            <FontAwesomeIcon icon={faChartLine} />
          </IconButton>
        </Link>
      </React.Fragment>) : (<Link to={"/signup"} className="link white">
        <IconButton color="inherit">
          <FontAwesomeIcon style={{ fontSize: "1.4rem" }} icon={faUserPlus} />
        </IconButton>
      </Link>)


    return (
      <div className={classes.root} >
        <AppBar position="static" className="appbar">
          <Toolbar>
            <Typography className="title" variant="h6" color="inherit" noWrap>
              <span>
                <Link to={"/"} className="brand">
                  MyHondana: Bookshelf
                  <FontAwesomeIcon className="logo" icon={faBookOpen} />
                </Link>
              </span>
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Link to={"/search"} className="link white">
                <IconButton color="inherit">
                  <Search />
                </IconButton>
              </Link>
              {showIconsWhenLoggedIn}
              <IconButton
                aria-owns={isMenuOpen ? "material-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                className="link white"
              >
                {auth.uid ? <Avatar className='avatar'>{profile.initials}</Avatar> : <AccountCircle />}
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                disabled
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                className="link white"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}


PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PrimarySearchAppBar));
