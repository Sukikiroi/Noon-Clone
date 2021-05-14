import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import {
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
const useStyles = makeStyles((theme) => ({
  countryselect: {
    boxShadow: "0 1px 6px 0 rgba(34, 34, 34, 0.15)",
    textTransform: "capitalize",
    width: "80%",
    height: "35px",
    marginTop: "10px",
    borderRadius: "5px",
    border: "2px solid grey",
    [theme.breakpoints.up("lg")]: {
      width: "590px",
    },
  },
  fullname: {
    marginTop: "10px",
    
    [theme.breakpoints.up("lg")]: {
      marginLeft:'20px',
      width:'250px',
     position:'relative',
     left:'6px',
    },
    width: "80%",
    height: "40px",
    border: "2px solid grey",
    borderRadius: "5px",
    outline: "none",
    boxShadow: "0 1px 6px 0 rgba(34, 34, 34, 0.15)",
  },
  containerClass: {
    marginTop: "10px",
    width: "80%",
   
    [theme.breakpoints.up("lg")]: {
      marginLeft:'10px',
    },
    height: "40px",
    border: "2px solid grey",
    borderRadius: "5px",
    outline: "none",
    boxShadow: "0 1px 6px 0 rgba(34, 34, 34, 0.15)",
  },
  Shippingaddress: {
    boxShadow: "0 1px 6px 0 rgba(34, 34, 34, 0.15)",
    textTransform: "capitalize",
    width: "80%",
    height: "35px",
    marginTop: "10px",
    borderRadius: "5px",
    border: "2px solid grey",
    [theme.breakpoints.up("lg")]: {
      width: "590px",
    },
  },
  postcode:{
    boxShadow: "0 1px 6px 0 rgba(34, 34, 34, 0.15)",
    textTransform: "capitalize",
    width: "80%",
    height: "35px",
    marginBottom: "10px",
    marginTop: "10px",
    borderRadius: "5px",
    border: "2px solid grey",
    [theme.breakpoints.up("lg")]: {
      width: "590px",
    },
  },
  city:{
  boxShadow: "0 1px 6px 0 rgba(34, 34, 34, 0.15)",
    textTransform: "capitalize",
    width: "80%",
    height: "35px",
    marginTop: "10px",
    borderRadius: "5px",
    border: "2px solid grey",
    [theme.breakpoints.up("lg")]: {
      width: "590px",
    },
  }


}));

const Checkoutleft = ({ parentCallback }) => {
  const classes = useStyles();
  const [Prix, setPrix] = useState("");

  const onchangefield = (e) => {
    setPrix(e.target.value);
    parentCallback("Hello");
  };

  let state = { value: "coconut" };
  return (
    <div>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <input
            className={classes.fullname}
            type="text"
            placeholder="Full Name *"
          />
        </Grid>
        <Grid item xs={12} lg={6}>
       <div   className={classes.containerClass} > 
       {/* <ReactPhoneInput     defaultCountry="gb"  /> */}

       </div>
      
        </Grid>
        <Grid item xs={12}>
          <select value={state.value} className={classes.countryselect}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Dubai</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </Grid>
        <Grid item xs={12}>
          {" "}
          <select value={state.value} className={classes.countryselect}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </Grid>
        <Grid item xs={12}>
          <input
            className={classes.city}
            type="address"
            placeholder="City/Town"
          />
        </Grid>
        <Grid item xs={12}>
          <input
            className={classes.Shippingaddress}
            type="address"
            placeholder="Shipping Adress"
          />
        </Grid>
        <Grid item xs={12}>
        <input
            className={classes.postcode}
            type="address"
            placeholder="Zip Code"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Checkoutleft;
