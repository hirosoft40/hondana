import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Avatar,
  IconButton,
  Typography,
  MenuItem,
  Menu
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import MoreIcon from "@material-ui/icons/MoreVert";
import "./AppBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faBookReader,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";
import {
  SearchRounded,
  // Favorite,
  Search,
  AccountCircle
} from "@material-ui/icons";
import { connect } from "react-redux";
import { signOut } from "../actions/authActions";

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center"
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
  };

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

    const renderSignInStatus = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        {!auth.uid ? (
          <MenuItem onClick={this.handleMenuClose}>
            <Link to="/signin" style={{ textDecoration: "none" }}>
              SignIn{" "}
              <FontAwesomeIcon icon={faSignInAlt} style={{ marginLeft: "5" }} />
            </Link>
          </MenuItem>
        ) : (
          <MenuItem onClick={this.handleLogOut}>
            SignOut{" "}
            <FontAwesomeIcon icon={faSignOutAlt} style={{ marginLeft: "5" }} />
          </MenuItem>
        )}
      </Menu>
    );

    // display icons depending on login status
    const showIconsWhenLoggedIn = clsColor =>
      auth.uid ? (
        <div>
          <Link to="/" className={clsColor}>
            <IconButton color="inherit">
              <FontAwesomeIcon icon={faBookReader} />
            </IconButton>
          </Link>
          <Link to="/history" className={clsColor}>
            <IconButton color="inherit">
              <FontAwesomeIcon icon={faChartLine} />
            </IconButton>
          </Link>
          <IconButton
            aria-owns={isMenuOpen ? "material-appbar" : undefined}
            aria-haspopup="true"
            onClick={this.handleProfileMenuOpen}
            className={clsColor}
          >
            <Avatar className="avatar">{profile.initials}</Avatar>
          </IconButton>
        </div>
      ) : (
        <div>
          <Link to="/signup" className={clsColor}>
            <IconButton color="inherit">
              <FontAwesomeIcon
                style={{ fontSize: "1.4rem" }}
                icon={faUserPlus}
              />
            </IconButton>
          </Link>
          <IconButton
            aria-owns={isMenuOpen ? "material-appbar" : undefined}
            aria-haspopup="true"
            onClick={this.handleProfileMenuOpen}
            className={clsColor}
          >
            <AccountCircle />
          </IconButton>
        </div>
      );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>
          <Link to="/search" className="link">
            Search Books
            <IconButton color="inherit" className="mobileLinks">
              <SearchRounded />
            </IconButton>
          </Link>
        </MenuItem>
        {auth.uid ? (
          <div>
            <MenuItem onClick={this.handleMenuClose}>
              <Link to="/" className="link">
                Your Books
                <IconButton color="inherit" className="mobileLinks">
                  <FontAwesomeIcon icon={faBookReader} />
                </IconButton>
              </Link>
            </MenuItem>
            <MenuItem onClick={this.handleMenuClose}>
              <Link to="/history" className="link">
                History
                <IconButton color="inherit" className="mobileLinks">
                  <FontAwesomeIcon icon={faChartLine} />
                </IconButton>
              </Link>
            </MenuItem>
            <MenuItem onClick={this.handleLogOut}>
              SignOut{" "}
              <FontAwesomeIcon
                icon={faSignOutAlt}
                style={{ marginLeft: "5" }}
              />
            </MenuItem>
          </div>
        ) : (
          <div>
            <MenuItem onClick={this.handleMenuClose}>
              <Link to="/signup" className="link">
                New Account
                <IconButton color="inherit" className="mobileLinks">
                  <FontAwesomeIcon
                    style={{ fontSize: "1.4rem" }}
                    icon={faUserPlus}
                  />
                </IconButton>
              </Link>
            </MenuItem>
            <MenuItem onClick={this.handleMenuClose}>
              <Link to="/signin" className="link">
                SignIn
                <IconButton color="inherit" className="mobileLinks">
                  <FontAwesomeIcon
                    icon={faSignInAlt}
                    style={{ fontSize: "1.4rem" }}
                  />
                </IconButton>
              </Link>
            </MenuItem>
          </div>
        )}
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static" className="appbar">
          <Toolbar>
            <Typography className="title" color="inherit" noWrap>
              <span>
                <Link to="/">
                  <span className="brand">MyHondana: Bookshelf</span>
                  <FontAwesomeIcon className="logo" icon={faBookOpen} />
                </Link>
              </span>
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Link to="/search" className="link white">
                <IconButton color="inherit">
                  <Search />
                </IconButton>
              </Link>
              {showIconsWhenLoggedIn("link white")}
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                className="link white"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderSignInStatus}
        {renderMobileMenu}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(PrimarySearchAppBar));
