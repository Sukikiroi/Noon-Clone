import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Orders from './ProfileInfo/Order'
import Profile from '../Containerprofile'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function InfoSide({Menuvalue}) {
    console.log(Menuvalue+'I am Info')
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
    


      {(Menuvalue==1 &&   <Orders/>) || <Profile/>}
      </Grid>
    </div>
  );
}
