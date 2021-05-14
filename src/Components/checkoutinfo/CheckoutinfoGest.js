import React, { useState } from "react";
 
import { useFormik } from 'formik';
//  import Formikform from './Formikform'

 import {
  FormControl as FormControlchakra,
  FormLabel,Input,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react"
import {
  Grid,
  Typography,
  Paper,
  makeStyles,
  TextField,
  RadioGroup,
  withStyles,
  FormControlLabel,
  Radio,
  Button,
  Icon,
  Divider,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Hidden,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { purple } from "@material-ui/core/colors";
import Ordersummary from "../ordersummary/Ordersummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Height } from "@material-ui/icons";

import InputBase from "@material-ui/core/InputBase";
// import { FormControl } from '@chakra-ui/react'
// import { useCall } from '@chakra-ui/hooks'
import NativeSelect from "@material-ui/core/NativeSelect";
const useStyles = makeStyles((theme) => ({
  hintTitle: {
    textAlign: "center",
  },
  inputForm: {
    marginTop: "10px",
    marginBottom: "10px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  button: {
    backgroundColor: "black",
    height: "60px",

    "&:hover": {
      backgroundColor: "yellow",
      color: "black",
    },
    color: "white",
  },
  root: {
    // marginTop: '50px',
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      // height:'100%'
    },
    [theme.breakpoints.up("md")]: {
      // flexDirection: 'column-reverse',
      height: "100%",
    },
  },
  gridright: {
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
    },
  },
  grid_right_small: {
    backgroundColor: "whitesmoke",
  },
}));




const CheckoutinfoGest = () => {
  const classes = useStyles();
  const [formshipping, setFormshipping] = useState({
    fullname: "",
    phonenumber: "",
    city: "",
    shippingadress: "",
  });

  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  const handlesubmit = () => {
    console.log(formshipping);
  };

   
  return (
    <div style={{ height: "100vh" }}>
      <Grid container className={classes.root} alignItems="stretch">
        {/* <Paper> */}
        <Grid item xs={0} md={1} />
        <Grid item xs={12} md={4}>
          <Typography className={classes.hintTitle} variant="h5">
            Please fill out the form to confirm the request!
          </Typography>

        
        </Grid>
        <Grid item xs={0} md={1} />

        {/* <Divider orientation='vertical' /> */}

        <Grid item xs={0} md={1} className={classes.grid_right_small}>
          {/* <Divider orientation="vertical" /> */}
        </Grid>

        <Grid item xs={12} md={4} container>
          <Hidden mdUp={true}>
            <Accordion
              square
              className={classes.grid_right_small}
              style={{ width: "100%" }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Grid container justify="space-between" alignItems="center">
                  <Typography>
                    {" "}
                    <ShoppingCartIcon /> Show order summary
                  </Typography>
                  <Typography variant="h5"> $43.00 </Typography>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <Ordersummary />
              </AccordionDetails>
            </Accordion>
          </Hidden>

          <Hidden smDown={true} className={classes.grid_right_small}>
            <Ordersummary />
          </Hidden>
        </Grid>

        <Grid item xs={0} md={1} className={classes.grid_right_small} />
        {/* </Paper> */}
      </Grid>
    </div>
  );
};

export default CheckoutinfoGest;
