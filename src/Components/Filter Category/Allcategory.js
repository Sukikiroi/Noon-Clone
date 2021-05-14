import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Categorychoice from './Category/Categorychoise'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    columnCount:'6',
  },
}));

export default function Allcategory() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Categorychoice
              image={
                "https://www.retailmenot.com/tng/static/images/icons/electronics_v3.png"
              }
              name={"Electronic"}
            />

            <Categorychoice
              image={
                "https://www.retailmenot.com/tng/static/images/icons/baby.png"
              }
              name={"Baby"}
            />
            <Categorychoice
              image={
                "https://www.retailmenot.com/tng/static/images/icons/beauty_v3.png"
              }
              name={"Beauty"}
            />
            <Categorychoice
              image={
                "https://www.retailmenot.com/tng/static/images/icons/books.png"
              }
              name={"Books"}
            />

            <Categorychoice
              image={
                "https://www.retailmenot.com/tng/static/images/icons/entertainment.png"
              }
              name={"Entertainment"}
            />
            <Categorychoice
              image={
                "https://www.retailmenot.com/tng/static/images/icons/food_v3.png"
              }
              name={"Pizza"}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
