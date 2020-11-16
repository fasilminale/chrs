import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,

} from "react-router-dom";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    ButtonGroup
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
    grow: {
        flexGrow: 1,
    },
});

class Header extends React.Component {
    render() {
        const { classes } = this.props;
        return ( <
            AppBar position = "static" >
            <
            Toolbar >
            <
            IconButton color = "inherit"
            aria - label = "Open drawer" >
            <
            HomeIcon / >
            <
            /IconButton>

            <
            Typography variant = "h6"
            color = "inherit"
            noWrap >
            HOTELS <
            /Typography>

            <
            div className = { classes.grow } > < /div>

            <
            div >
            <
            Router > { /* <Link variant="contained" color="white" to='/signup' >Register</Link> */ }

            <
            Link to = "/Signup" > Register < /Link> <
            Link to = "/Login" > Signin < /Link>

            <
            /Router> <
            /div> <
            /Toolbar> <
            /AppBar>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);

///Users/andi/my-app/src/test.js