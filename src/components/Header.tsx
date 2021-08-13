import * as React from 'react';
import { Toolbar, makeStyles } from '@material-ui/core';

// Create purple header style material ui
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white',
    '& > *': {
      margin: theme.spacing(1),
    },
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: '160%',
    fontWeight: 'bold',
    borderRadius: theme.shape.borderRadius,
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <>
      <Toolbar className={classes.root}>TIK TAK TOE</Toolbar>
    </>
  );
};
