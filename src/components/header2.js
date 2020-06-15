import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchBox from "./searchBox.js";
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(),
        flexShrink: 0,
    },
}));

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function ElevateAppBar(props) {
    const classes = useStyles();
    const sections = [
        { title: 'Home', url: '/home' },
        { title: 'About Us', url: '#' },//app intro, might be merged to "home" tab
        { title: 'Challenges', url: '/groups' },
        { title: 'My Profile', url: '/myProfile' },
        { title: 'Joined Group', url: '/joinGroup' },
        { title: 'Setting', url: '#' }
    ];

    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar style={{ backgroundColor: 'transparent' }}>
                    <Toolbar className={classes.toolbar}>
                        <img align="left" src={require('../media/GoalMotivator.png')} alt="" className="logo" />
                        <Typography component="h2"
                            variant="h5"
                            color="textPrimary"
                            align="center"
                            noWrap
                            className={classes.toolbarTitle}
                        >GoalMotivator</Typography>
                        <IconButton>
                            <SearchBox />
                        </IconButton>
                        <Button variant="outlined" size="small">
                            Sign in
        </Button>
                        <Button variant="outlined" size="small">
                            Sign up
        </Button>
                    </Toolbar>
                    <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                        {sections.map((section) => (
                            <Link
                                noWrap
                                key={section.title}
                                variant="body2"
                                href={section.url}
                                color="textPrimary"
                                className={classes.toolbarLink}
                            >
                                {section.title}
                            </Link>
                        ))}      
                        </Toolbar>

                </AppBar>
            </ElevationScroll>
            <Toolbar />
            <Toolbar />

        </React.Fragment>
    );
}
