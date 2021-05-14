import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme) => ({
    root:{
height:'350px',
 

    }
    ,
    papercard:{
backgroundColor:'black',
height:'300px',
width:'300px',

    }

}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
    <Grid container>
    <Box component="span" m={1}>
  

<Paper className={classes.papercard}>

        <Grid item xs={12}>
          12
        </Grid>





        </Paper>
        </Box>
        </Grid>

  
    </Card>
  );
}
