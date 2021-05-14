import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Passwordunput from './passwordiput'
import { Button, ButtonGroup } from "@chakra-ui/react"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
   
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
       
        <Grid item xs={3}>
          <Paper className={classes.paper} elevation={0}>Old Password:</Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}  elevation={0}><Passwordunput/></Paper>
        </Grid>
        

        <Grid item xs={3}>
          <Paper className={classes.paper} elevation={0}>New Password:</Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}  elevation={0}><Passwordunput/></Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paper} elevation={0}>Confirm Password:</Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}  elevation={0}><Passwordunput/></Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paper} elevation={0}><Button colorScheme="blue">Submit</Button> </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}  elevation={0}> </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
