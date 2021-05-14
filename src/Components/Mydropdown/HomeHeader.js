import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CarouselHeader from './CarouuselHeader'
import Dropdown from 'rc-dropdown';
import 'rc-dropdown/assets/index.css';
import shoes from './shoes.jpg';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper1: {
    backgroundColor: "gold",
    height: "200px",
    bottom:'100px',
    borderRadius: "10px",
    width: "500px",
    position:'relative',
    right:'180px',
    backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa0N5xMR-enr7E6-DukcZHNbYZpIkt4L03wg&usqp=CAU')`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
  },
  paper2: {
    height: "200px",
    bottom:'105px',
    backgroundColor: "Khaki",
    zIndex:'-1',
    borderRadius: "10px",
    width: "500px",
    position:'relative',
    right:'180px',
   backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnzfD5OLEMsfQe7Ul1udkOWExs2xyzuofj6Q&usqp=CAU')`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
  },
  paper3: {
    backgroundColor: "gold",
    bottom:'100px',
    borderRadius: "10px",
    width: "700px",
    height: "420px",
    position:'relative',
    right:'100px',
    backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFWVCUkvGnkpXMG5RDhSwOMbRlhjFuK2ATw&usqp=CAU ')`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
  },
  paper4: {
    
    backgroundColor: "gold",
    borderRadius: "10px",
    width: "300px",
    height: "420px",
    backgroundImage: `url(' https://isenselabs.com/img/uploads/blogpost_banner_01c07975ab.png')`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
  },
  buttonoverimg:{
    position:'absolute',
    top:'360px',
    borderRadius:'50%',
    height:'50px',
    width:'10px',
    left:'230px',
    backgroundColor:'white',
    color:'black',
    '&:hover': {
      background: "HotPink",
   },
  },
  textimage:{
    position:'absolute',
   top:'100px',
   fontFamily:'Dela Gothic One, cursive',
   fontSize:'20px',
  },
  textimage2:{
    position:'absolute',
   top:'130px',
   fontFamily:'Dela Gothic One, cursive',
   fontSize:'10px',
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container  >
      <Grid item xs={2}></Grid>
        <Grid item xs={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper1} elevation={2}>
          
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper2} elevation={0}>
<h1  className={classes.textimage}>Get Up To 50%</h1>
<br></br>
<h1  className={classes.textimage2}>For The Holiday Season</h1>
              {/* <img src={shoes} alt="shoes" /> */}

              </Paper>
            </Grid>
          </Grid>
        </Grid>
     
     
     
     
     
     
     
     
     
     
        <Grid item xs={3}>
          <Paper className={classes.paper3} elevation={0}>
         
          <Button className={classes.buttonoverimg} variant="contained" color="primary">
  <ArrowForwardIcon/>
</Button>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          {/* <Paper className={classes.paper4} elevation={2}></Paper> */}
        </Grid>
      </Grid>
    </div>
  );
}
