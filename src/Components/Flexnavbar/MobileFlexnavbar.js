import React from "react";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import PageviewIcon from "@material-ui/icons/Pageview";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles((theme) => ({
  nav: {
    height: "50px",
    width: "100%",
    backgroundColor: "yellow",
    padding: "0px 15px",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  searchcontainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: "40px",
    width: "100%",
    backgroundColor: "white",
    borderRadius: "5px",
  },
  img: {
    maxWidth: "100%",
  },
  piccontainer:{
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  inputcontainer:{
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  input:{
    outline:'none'
  }
}));
const Mobileflexnavbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.nav}>
      <Grid container>
        <Grid item xs={3}>
          <img
            className={classes.img}
            src="https://k.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg"
            alt="noon"
          />
        </Grid>
        <Grid item xs={9}>
          <div className={classes.searchcontainer}>
            <Grid container>
              <Grid item xs={10}>
                <div  className={classes.inputcontainer}>

                 <input className={classes.input} type='text' placeholder='what are you loking for ?'/>
                </div>
              </Grid>
              <Grid item xs={2}>
                <div   className={classes.piccontainer}>
               <SearchIcon/>

                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Mobileflexnavbar;
