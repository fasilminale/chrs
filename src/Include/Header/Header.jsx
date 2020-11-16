import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";


const styles = theme => ({
  grow: {
    flexGrow: 1
  }
});

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar style={{ background: '#2B78E4' }} position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Open drawer">
            <NavLink
              exact
              style={{ textDecoration: "none", color: "white" }}
              activeStyle={{ color: "white" }}
              to="/"
            >
              <HomeIcon />
            </NavLink>
          </IconButton>

          <Typography variant="h6" color="inherit" noWrap>
            HOTELS
          </Typography>

          <div className={classes.grow}> </div>

          <div>
            <ul>
              <li
                style={{
                  display: "inline-block",
                  padding: 6
                }}
              >
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  activeStyle={{ color: "#0000FF" }}
                  to="/hotel_form"
                >
                  Add Your Hotel
                </NavLink>
              </li>
              <li
                style={{
                  display: "inline-block",

                  padding: 6
                }}
              >
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  activeStyle={{ color: "#0000FF" }}
                  to="/signup"
                >
                  Signup
                </NavLink>
              </li>
              <li
                style={{
                  display: "inline-block",
                  padding: 6
                }}
              >
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  activeStyle={{ color: "#0000FF" }}
                  to="/signin"
                >
                  Signin
                </NavLink>
              </li>
            </ul>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
