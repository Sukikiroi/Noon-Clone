import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
const useStyles = makeStyles({
  card: {
    height: "180px",
    width: "100%",
    borderRadius:'10px'
  },
  paper: {
    width: "100%",
    height: "50%",
  },
  off: {
    backgroundColor: "red",
    borderRadius: "50%",
    height: "30px",
    width: "30px",
    position: "relative",
    bottom: "100px",
    left: "65px",
    color:'white',
    textAlign:'center',
    paddingTop:'5px'
  },
   
  addtocart:{
    height:'30px',
    transition:'height 1s',
   animation:'expand 1 s',
    textTransform:'capitalize',
    color:'white',
    backgroundColor:'black',
    borderRadius:'0px',
    width:'100%',
    "&:hover": {
    
      color:'black',
      backgroundColor:'white',
      opacity:'5',
    }

  
  }
  ,
  title:{
    marginTop:'-30px',
    fontWeight:'bold',
    whiteSpace:'nowrap'
   
  }

});

const Homeofrpoduct = ({ Image }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card} variant="outlined">
        <Grid container>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={0}>
         
              <img src={Image}  className={classes.image} alt="Logo" />

              <h1 className={classes.off}>50%</h1>
            </Paper>
          </Grid>
          <Grid item xs={12} className={classes.title}>Redmi Note 10</Grid>
          
          <Grid item xs={12}>
          <Button  className={classes.addtocart} variant="contained"  >
        Add  cart
      </Button>

          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Homeofrpoduct;
