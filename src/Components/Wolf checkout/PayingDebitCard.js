import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from '@material-ui/core/Button';
import { FaCcPaypal } from 'react-icons/fa';
import { FcApproval } from 'react-icons/fc';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
  payingdebitcard: {
    whiteSpace: "nowrap",
    marginLeft:'20px'
  },
  paybalcheckout:{
    color:'white',
     
   
    width:'250px',
    borderRadius:'10px',
    height:'50px',
    backgroundColor:'black'
  },
  debitgrid:{
    whiteSpace: "nowrap",
  },
  creditnumberfiled:{
    marginLeft:'30px',
    width:'250px',
    marginBottom:'10px',
    marginTop:'10px'
  },
  securitycode:{
    marginLeft:'30px',
    width:'170px',
    marginBottom:'10px',
    marginTop:'10px'
  },
  order: {
    backgroundColor: "black",
    height:'50px',
    width: "200px",
    borderRadius: "10px",
    textTransform: "capitalize",
    position:'relative',
    right:'50px'
  },
}));

const PayingDebitCard = () => {
  const [value, setValue] = React.useState("Paybal");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={3}>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            className={classes.payingdebitcard}
            value="Debit"
            control={<Radio style={{color:"black"}}/>}
            label=" Pay with Credit or Debit Card"
          />

{(value=='Debit' &&



<Grid container >
<Grid item xs={12}  className={classes.debitgrid} >

<Grid container >

<Grid item xs={6}>
<FcApproval style={{fontSize:'20px',marginLeft:'25px'}}/>

</Grid>
<Grid item xs={6} style={{textTransform:'capitalize'}} >100% SECURE CHECKOUT.</Grid>
</Grid>


<Grid item xs={12}>
   <TextField id="outlined-basic" label="Credit Card number *"  className={classes.creditnumberfiled}  variant="outlined" />
</Grid>
<Grid item xs={12}> <TextField id="outlined-basic" label="Expiration date *"  className={classes.creditnumberfiled}  variant="outlined" /></Grid>
<Grid item xs={12}><TextField id="outlined-basic" label="Year *"  className={classes.creditnumberfiled}  variant="outlined" /></Grid>

<Grid item xs={12}>
<TextField id="outlined-basic" label="Card security code *"  className={classes.securitycode}  variant="outlined" />

</Grid>


</Grid>


</Grid>



) 







|| " "}
          <FormControlLabel
            className={classes.payingdebitcard}
            value="Paybal"
            control={<Radio   style={{color:"black"}}/>}
            label="Pay with PayPal"
          />
        </RadioGroup>
      </Grid>
      <Grid item xs={3}>
        {" "}
      </Grid>
      <Grid item xs={3}>
        {" "}
      </Grid>
      <Grid item xs={3}>
        {" "}
      </Grid>
      <Grid item xs={12}>
      {
      (
        value=='Paybal'  &&  <Button
        variant="contained"
     
        className={classes.paybalcheckout}
        startIcon={<FaCcPaypal style={{fontSize:'40px'}} />}
      >
        Checkout
      </Button>
      
      )
      
      
      ||
      
     <Button className={classes.order} variant="contained" color="primary">
            Place Order
          </Button> 
      
      
      }
     



      </Grid>

    </Grid>
  );
};

export default PayingDebitCard;
