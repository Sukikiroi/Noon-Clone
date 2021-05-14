import React, { useState } from "react";
import "./Topproductpage.css";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "200px",
  
  },
  paperbuttons:{

    height:'200px'
  },
  paperinfo:{
    height:'210px',
    width:'1500px',
    position:'relative',
    right:'30px',
  }
}));
/**
 * Productpagefixed it show on scrool  in 600 position
 */
function Productpagefixed() {
  const classes = useStyles();

  return (
    <div class="navbar">
      <Paper className={classes.root} elevation={3}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paperinfo}>xs=6f</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paperbuttons}>
              <Grid container>
                <Grid item xs={4}>
                  <Button  style={{position:'relative',top:'50px',left:'80px'}} variant="outlined">Default</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button   style={{position:'relative',top:'50px',right:'60px'}} variant="outlined" color="primary">
                    Primary
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button style={{position:'relative',top:'50px',right:'170px'}} variant="outlined" color="secondary">
                    Add to Cart
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Productpagefixed;
