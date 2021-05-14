import React from "react";
import InputBase from "@material-ui/core/InputBase";
import { RiSearchLine } from "react-icons/ri";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import   Logo  from './slacklogo.png';
const useStyles = makeStyles((theme) => ({
  searchroot: {
    width: "20em",
    marginTop: "10px",
    backgroundColor: "white",
    borderRadius: "5px",
    position:'relative',
    right:'130px',
    "&:hover ": {
      backgroundColor: "Gainsboro",
    },
  },
  searchinput: {
    display:'grid',
    justifyContent:'left',
    marginTop:'1em'
   
   
  },
  searchicon: {
    display:'grid',
    alignContent:'center',
    justifyContent:'center',
    marginTop:'1em'
  },
  logo: {
  display:'grid',
  justifyContent:'center'
    
    
  },
  logopic: {
    height: "3em",
  },
  searchroot:{
display:'flex',
alignItems:'center'
  },
  searchcontainer:{
    
    width:'100%',
    backgroundColor:'grey',
    display:'flex',
alignItems:'center'
    
  }
}));
const Mobilenavbar = () => {
  const classes = useStyles();
  const something = (e) => {
    if (e.keyCode === 13) {
      console.log(e.target.value);
    }
  };
  return (
    //
    // className={classes.logo}
<Grid container>
<Grid item xs={3}   >
  <div  className={classes.logo} >
  <img src={Logo} alt="React Logo"  className={classes.logopic} />
</div>

</Grid> 

<Grid item xs={9}   className={classes.searchroot} >
<div className={classes.searchcontainer} >
<Grid container>
<Grid item xs={3} className={classes.searchicon}>
 
  
  <RiSearchLine  />
 
  </Grid>
<Grid item xs={9} className={classes.searchinput}  >1</Grid>

</Grid>
</div>

</Grid>

</Grid>
 


  );
};

export default Mobilenavbar;
