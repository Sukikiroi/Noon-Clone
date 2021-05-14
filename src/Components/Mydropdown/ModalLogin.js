import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  Loginbutton: {
    position: "relative",
    left: "20px",
    marginTop: "-5px",
    borderColor: "black",
    color: "black",
  },
  modalpaper: {
    height: "500px",
    width: "400px",
    borderRadius: "30px",
  },
  closebutton: {
    position: "relative",
    left: "350px",
    fontSize: "100px",
    color:'black',
    
  },
  tabs: {},
  buttonconecter: {
    backgroundColor: "black",
    width: "250px",
    height: "50px",
    borderRadius: "20px",
    textTransform: "capitalize",
  },
  addressemail:{ 
    marginLeft:'30px',
    fontWeight:'bold'

  },
  passwordtext:{
    marginLeft:'30px',
    fontWeight:'bold'
  }
  ,
  email:{
    width:'300px',
    borderRadius:'30px',
    marginLeft:'30px',
    height:'60px'
  },
  password:{
    width:'300px',
    borderRadius:'30px',
    marginLeft:'30px',
    height:'60px'
  },
  conecter:{
    backgroundColor:'black',
    width:'300px',
    color:'white',
    textTransform:'capitalize',
    marginLeft:'30px',
    borderRadius:'30px',
    height:'50px',
    '&:hover': {
      backgroundColor:'black',
      color:'white',
   },
  },
  forgotpassword:{
    color:'black',
    textTransform:'capitalize'
  },
  ou:{
    marginLeft:'160px',
  },
  googlebutton:{
    width:'300px',
    border:'2px solid',
    borderRadius:'20px',
    height:'50px',
    marginLeft:'30px',
    textTransform:'capitalize'
    
  }

    ,
    facebookbutton:{
      width:'300px',
      border:'2px solid',
      borderRadius:'20px',
      height:'50px',
      marginLeft:'30px',
      marginBottom:'-40px',
      textTransform:'capitalize'
    }
}));

const BlackCheckbox = withStyles({
  root: {
    color: 'black',
    '&$checked': {
      color:'black',
    },
   height:'30px',
   marginLeft:'30px',
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  }


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className={classes.Loginbutton}
        onClick={handleOpen}
        variant="outlined"
        color="primary"
      >
        Login
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper className={classes.modalpaper} elevation={3}>
            <IconButton
              className={classes.closebutton}
              onClick={handleClose}
             
              aria-label="upload picture"
              component="span"
            >
              <HighlightOffIcon />
            </IconButton>
            <div>
              <Tabs variant="enclosed">
                <TabList>
                  <Tab>Connexion</Tab>
                  <Tab>Sing in</Tab>
                </TabList>
                <TabPanels className={classes.tabs}>
                  <TabPanel>
                  <Grid container  >
        <Grid item xs={12}   className={classes.addressemail}>
        Adresse email
        </Grid>
        <Grid item xs={12}>
        <TextField id="outlined-basic"  className={classes.email} variant="outlined" />
        </Grid>
        <Grid item xs={12} className={classes.passwordtext} >     
        Mot de passe
        </Grid>
        <Grid item xs={12}>
        <TextField id="outlined-basic"  className={classes.password} variant="outlined"  type="password" />
        </Grid>
        <Grid item xs={12}>
        <Grid container  >
        <Grid item xs={6}>

        <FormControlLabel
        control={<BlackCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
        label="Stay Concted"
      />
        </Grid>
        <Grid item xs={6}>
        <Button href="#text-buttons"    className={classes.forgotpassword}>
  Forgot password ?
</Button>

        </Grid>


        </Grid>
        <Grid item xs={12}>

        <Button variant="contained"  className={classes.conecter} >
  Contecter
</Button>
        </Grid>
        <Grid item xs={12}  className={classes.ou}>
          OU
        </Grid>
        <Grid item xs={12} >
        <Button variant="outlined"  className={classes.googlebutton}   startIcon={<WhatsAppIcon />}  >
  google
</Button>

        </Grid>
        <Grid item xs={12} >

        <Button variant="outlined"   className={classes.facebookbutton}   startIcon={<FacebookIcon />}>
  Facebook
</Button>
        </Grid>











        </Grid>




        </Grid>





















                  </TabPanel>
                  <TabPanel>2</TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}
