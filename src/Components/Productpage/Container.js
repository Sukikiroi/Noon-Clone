import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Showproduct from "./showproduct";
import Productinfo from "./productinfo";
import Productpagefixed from "./productpagefixed";
import Peopleoftenbuy from "../pplOftenbuy/PeopleOftenBuy";
import './productpagecheckout.css'
import Hidden from '@material-ui/core/Hidden';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paper1: {
    backgroundColor: "",
    height: "500px",
  },
  paper2: {
    backgroundColor: "white",
    height: "500px",
  },
  Peopleoftenbuy: {
    height: "200px",
    width: "200px",
  },
  buttonpeopleoftenbuy: {
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    left: "95px",
    bottom: "15px",
  },
}));

export default function FullWidthGrid() {
  const [renderonscroll, setrenderonscroll] = useState(true);
  const [count, setCount] = useState(0);
  const classes = useStyles();

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const renderonscrol = () => {
    if (scrollPosition > 900) setrenderonscroll(true);
    else setrenderonscroll(false);
  };
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    window.addEventListener("scroll", handleScroll, true);
    renderonscrol();
  });
  return (
    <div className={classes.root}>
      {(renderonscroll && <Productpagefixed />) || ""}
      <br></br>
      <br></br>
      <br></br>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6} >
          <Hidden only="xs">
            <Paper className={classes.paper1} elevation={0}>
              <Productinfo />
            </Paper>
            </Hidden>
            <Hidden only="lg">
            <Paper className={classes.paper2} elevation={0}>
              <Showproduct />
              <br></br> <br></br> <br></br> <br></br>
              <br></br> <br></br> <br></br> <br></br>
              <br></br> <br></br> <br></br> <br></br>
              <br></br> <br></br> <br></br> <br></br>
            </Paper>
            </Hidden>

          </Grid>
          <Grid item xs={12} lg={6} >
          <Hidden only="xs"> 
            <Paper className={classes.paper2} elevation={0}>
              <Showproduct />
              <br></br> <br></br> <br></br> <br></br>
              <br></br> <br></br> <br></br> <br></br>
              <br></br> <br></br> <br></br> <br></br>
              <br></br> <br></br> <br></br> <br></br>
            </Paper>
            </Hidden>
            <Hidden only="lg"> 
            <Paper className={classes.paper1} elevation={0}>
              <Productinfo />
            </Paper>
            
            </Hidden>
          </Grid>
        </Grid>
      </Container>

    
          <div class='peoplenoftenbuy'>  
         
   <Peopleoftenbuy/>
  
         
    
    </div>
    </div>
  );
}
