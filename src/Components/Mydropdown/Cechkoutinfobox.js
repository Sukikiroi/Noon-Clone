import React,{useState} from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import Grid from "@material-ui/core/Grid";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import EmailIcon from "@material-ui/icons/Email";
import CheckIcon from '@material-ui/icons/Check';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import SettingsPhoneIcon from '@material-ui/icons/SettingsPhone';
import PaymentIcon from '@material-ui/icons/Payment';



import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";



export default function FlexDirection() {
  const useStyles = makeStyles((theme) => ({
    orderbutton: {
      height: "50px",
      width: "170px",
      borderRadius: "8px",
      textTransform: "lowercase",
      backgroundColor: "GoldenRod",
      color: "black",
      border: "none",
      position: "relative",
      left: "130px",
    },
    gestcheckout: {
      textTransform: "capitalize",
      fontWeight: "bold",
    },
  }));


  const theme = createMuiTheme({
    props: {
      // Name of the component
      MuiButtonBase: {
        // The properties to apply
        disableRipple: true // No more ripple, on the whole application!
      }
    }
  });

  const classes = useStyles();
  const [Edit, setEdit] = useState(false);
  const handleedit=()=>{
    setEdit(!Edit)
  }
  return (
    <MuiThemeProvider theme={theme}>
      <div style={{overflow:'-moz-hidden-unscrollable',overflowY:'hiden'}}>
    <Grid container>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={3}>
            {" "}
          </Grid>
          <Grid item xs={3} style={{ fontWeight: "bolder" }}>
            Gest Information
          </Grid>
          <Grid item xs={3}>
            {" "}
          </Grid>
          <Grid item xs={3}>
            <Button onClick={handleedit}>
            {(Edit &&  <CheckIcon style={{color:'green'}}/>  ) ||  <EditIcon />}
          
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container></Grid>
          <EmailIcon
            style={{ color: "blueviolet", position: "relative", right: "10px" }}
          />{" "}
          kaddourabdellaziz@gmail.com
        </Grid>
      </Grid>




      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={3}>
            {" "}
          </Grid>
          <Grid item xs={3} style={{ fontWeight: "bolder", marginTop: "20px" }}>
            Gest Information
          </Grid>
          <Grid item xs={3}>
            {" "}
          </Grid>
          <Grid item xs={3} style={{ marginTop: "20px" }}>
            <EditIcon />
          </Grid>
        </Grid>
        <Grid item xs={12}  >
        <PermIdentityIcon
          style={{ color: "blueviolet", position: "relative", right: "10px" }}
        />{" "}
        kaddourabdellaziz@gmail.com
          
         
        </Grid>
      </Grid>

      <Grid item xs={12}>
      
        <AddLocationIcon
          style={{ color: "blueviolet", position: "relative", right: "10px" }}
        />{" "}
        kaddourabdellaziz@gmail.com
      </Grid>
      <Grid item xs={12}>
        <Grid container></Grid>
        <SettingsPhoneIcon
          style={{ color: "blueviolet", position: "relative", right: "10px" }}
        />{" "}
        kaddourabdellaziz@gmail.com
      </Grid>



      <Grid item xs={12}>

      <Grid container>

      <Grid item xs={3}></Grid>
      <Grid item xs={3} style={{ fontWeight: "bolder", marginTop: "20px" ,whiteSpace:'nowrap'}}>
            Payment Information
          </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}  style={{   marginTop: "20px" }}>      <EditIcon /></Grid>

      </Grid>


      </Grid>




      <Grid item xs={12}>
        <Grid container></Grid>
        <PaymentIcon
          style={{ color: "blueviolet", position: "relative", right: "10px" }}
        />{" "}
        kaddourabdellaziz@gmail.com
      </Grid>



      <Grid item xs={12}>
        <Grid container  ></Grid>
        <CheckIcon
          style={{ color: 'blueviolet', position: "relative", right: "42px" }}
        />{" "}
    Use Shipping Adress  
      </Grid>

      <Grid item xs={12}>

      <Grid container>
      <Grid item xs={3}></Grid>
      <Grid item xs={3} style={{ fontWeight: "bolder", marginTop: "20px" ,textAlign:'left',paddingLeft:'10px'}}>Subtotal           </Grid>
      <Grid item xs={3}></Grid>
<Grid item xs={3}  style={{ fontWeight: "bolder", marginTop: "20px"  }}> USD 608</Grid>

      </Grid>


      </Grid>


      <Grid item xs={12}>

<Grid container>
<Grid item xs={3}></Grid>
<Grid item xs={3} style={{ fontWeight: "bolder", marginTop: "20px" ,textAlign:'left',paddingLeft:'10px'}}>Taxes           </Grid>
<Grid item xs={3}></Grid>
<Grid item xs={3}  style={{ fontWeight: "bolder", marginTop: "20px"  }}> Free</Grid>

</Grid>


</Grid>



<Grid item xs={12}>

<Grid container>
<Grid item xs={3}></Grid>
<Grid item xs={3} style={{ fontWeight: "bolder", marginTop: "20px" ,textAlign:'left',paddingLeft:'10px'}}>Total Price           </Grid>
<Grid item xs={3}></Grid>
<Grid item xs={3}  style={{ fontWeight: "bolder", marginTop: "20px"  }}> USD 610</Grid>

</Grid>


</Grid>


<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
      <Grid item xs={12}>
        <Button
          className={classes.orderbutton}
          variant="contained"
          color="primary"
        >
          Place Your Order
        </Button>
      </Grid>
    </Grid>
    </div>
    </MuiThemeProvider>
  );
}
