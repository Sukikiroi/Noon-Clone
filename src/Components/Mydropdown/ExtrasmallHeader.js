import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


export default function CenteredGrid() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper1: {
      backgroundColor: "gold",
      height: "200px",
      borderRadius: "10px",
      width: "220px",
      position:'relative',
      right:'50px',
      backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa0N5xMR-enr7E6-DukcZHNbYZpIkt4L03wg&usqp=CAU')`,
      backgroundRepeat:'no-repeat',
      backgroundSize:'100% 100%',
    },
    paper2: {
      height: "200px",
      backgroundColor: "gold",
      borderRadius: "10px",
      width: "220px",
      position:'relative',
      right:'50px',
      backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwPuuBmAnh4UYq9PHl18YIIW6bEID-zKYUMA&usqp=CAU ')`,
      backgroundRepeat:'no-repeat',
      backgroundSize:'100% 100%',
    },
    paper3: {
      backgroundColor: "gold",
      borderRadius: "30px",
      width: "300px",
      height: "420px",
      position:'relative',
      left:'120px',
      backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFWVCUkvGnkpXMG5RDhSwOMbRlhjFuK2ATw&usqp=CAU ')`,
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
    },
    paper4: {
        position:'relative',
        right:'60px',
      backgroundColor: "gold",
      borderRadius: "10px",
      width: "150px",
      height: "410px",
      backgroundImage: `url(' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3j4VFh_c5xrSMv9WuIdOoMmUs9HmQEjJo2A&usqp=CAU')`,
      backgroundRepeat:'no-repeat',
      backgroundSize:'100% 100%',
    },
    buttonoverimg:{
      position:'absolute',
      top:'350px',
      left:'85px',
      borderRadius:'50%',
      height:'50px',
      width:'10px',
       
      backgroundColor:'white',
      color:'black',
      '&:hover': {
        background: "HotPink",
     },
    }
  }));
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
      <Grid container  >
      <Grid item xs={2}></Grid>
        <Grid item xs={4}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Paper className={classes.paper1} elevation={2}>
          
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper2} elevation={2}></Paper>
            </Grid>
          </Grid>
        </Grid>
     
     
     
     
     
     
     
     
     
     
        <Grid item xs={3}>
         
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper4} elevation={2}>
          <Button className={classes.buttonoverimg} variant="contained" color="primary">
  <ArrowForwardIcon/>
</Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
