import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Shoppingcarticon2 from "./shopingcarticon.png";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import TextField from '@material-ui/core/TextField';
import logo from './logo3.png';

const useStyles = makeStyles((theme) => ({
  root: {
   
    borderRadius:'100px'
  },
  papaernavbar:{
      width:'400px',
      height:'100px',
      backgroundColor:'white'
  },
  logo:{
      height:'50px'
  },
  searchfilde:{
      borderRadius:'100px',
      width:'200px'
  },
  shipingbutton:{
      position:'relative',
      right:'20px'
  }
   
}));
const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }))(Badge);
export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      <Paper elevation={0}  className={classes.papaernavbar}>
      <Grid container spacing={3}>
      <Grid item xs={2}>
      <img src={logo} alt="Logo" className={classes.logo} />
        </Grid>

        <Grid item xs={6}>
      
        <TextField  style={{borderRadius:'30px',width:'250px',}}
         
          id="outlined-size-small"
          defaultValue="Search"
          variant="outlined"
          size="small"
        />
           </Grid>

        <Grid item xs={2}>
      
           </Grid>

           <Grid item xs={2}>
           <Button className={classes.shipingbutton}>
                    <StyledBadge badgeContent={16} color="secondary">
                      <img src={Shoppingcarticon2} height="20px" width="40px" />
                    </StyledBadge>
                  </Button>
           </Grid>

      </Grid>


      </Paper>
    </div>
  );
}
