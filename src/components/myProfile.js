import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import main from '../media/GoalSettingPlaceHolder.jpg';
import SignIn from './login.js';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage:  `url(${main})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function MyProfile(props) {

  const classes = useStyles();
  const { post } = props;

  return (
    <Grid container>
      <Grid item md={7}>
        <div className={classes.mainFeaturedPostContent}>
           <Typography component="h1" variant="h3" color="inherit" center>
                                                                  NAME's Profile
          </Typography>
//need to add:
//name, age... personal data
//current Goal
//complted goals, maybe in collapsed?

        </div>

      </Grid>
    </Grid>
  );
}
