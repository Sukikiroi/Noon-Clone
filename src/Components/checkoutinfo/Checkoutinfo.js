import React, { useState,useContext } from 'react'
import { Grid, Typography, Paper, makeStyles, TextField, RadioGroup, FormControlLabel, Radio, Button, Icon, Divider, FormControl, Select, MenuItem, InputLabel, Accordion, AccordionSummary, AccordionDetails, Hidden } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { purple } from '@material-ui/core/colors';
import Ordersummary from '../ordersummary/Ordersummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Height } from '@material-ui/icons';
// import { FormControl } from '@chakra-ui/react'
// import { useCall } from '@chakra-ui/hooks'
import { CartContext } from "../Cart Shopping/contexts/CartContext"
import axios from "axios";
import Checkoutnewinformation from './Checkoutnowinformation'
const useStyles = makeStyles((theme) => ({
    hintTitle: {
        textAlign: 'center'
    },
    inputForm: {
        marginTop: '10px',
        marginBottom: '10px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        
    },
    button: {
        backgroundColor: '#21B195',

        '&:hover': {
            backgroundColor: '#21B195',
        },
    },
    root: {
        // marginTop: '50px',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
            // height:'100%'
        },
        [theme.breakpoints.up('md')]: {
            // flexDirection: 'column-reverse',
            height:'100%'
        },
    },
    gridright: {
        [theme.breakpoints.up('sm')]: {
            
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '0px',
        }
    },
    grid_right_small: {
        backgroundColor:'whitesmoke',
     
    },
    
}));

const Checkoutinfo = () => {
    const {
        cartItems,
        itemCount,
        clearCart,product,
      } = useContext(CartContext);
    const classes = useStyles();
    const [formshipping, setFormshipping] = useState({  city: '', shippingadress: '' })

    const handlesubmit = () => {
        console.log(formshipping)
    }

    const postOrder=()=>{
        var currentuser = JSON.parse(localStorage.getItem("User"));
        let photo='';
        let providerId =  ''
        let email =  ''
        let displayName = ''
        if (currentuser== null){
          photo=''
        }
        else {
          photo = currentuser.photoURL;
          providerId = currentuser.uid;
          email = currentuser.email;
          displayName = currentuser.displayName;
        }
        const jsonuser = {
          providerId: providerId,
          Name: displayName,
          photo: photo,
          email: email,
        };
       
        axios
        .post(`http://localhost:2000/postUserFirebase`, { jsonuser,cartItems })
        .then((res) => {
          console.log(res.data);
           
            clearCart(product);
           
        
        });
      }

    return (
        <div style={{height:'100vh'}}>
   
            <Grid container className={classes.root} alignItems='stretch' >
                {/* <Paper> */}
                <Grid item xs={0} md={1} />
                <Grid item xs={12} md={4} >
                  
                    <Typography className={classes.hintTitle} variant='h5' >Please fill out the form to confirm the request!</Typography>
                    <form  >
                       
                       

                        {/* <InputLabel id='country-label' >Country</InputLabel> */}
                        <TextField
                            className={classes.inputForm}
                            label="Country"
                            // labelId="country-label"
                            // onChange={handleChange}
                            variant='outlined'
                            fullWidth
                            select
                        >

                            <MenuItem value='KSA'>KSA</MenuItem>
                            <MenuItem value='UAE'>UAE</MenuItem>
                            <MenuItem value='EG'>Egypte</MenuItem>
                        </TextField>

                        <TextField
                            className={classes.inputForm}
                            // placeholder='Country'
                            label="Country"
                            // labelId="country-label"
                            // onChange={handleChange}
                            variant='outlined'
                            fullWidth
                            select
                        >

                            <MenuItem value='KSA'>KSA</MenuItem>
                            <MenuItem value='UAE'>UAE</MenuItem>
                            <MenuItem value='EG'>Egypte</MenuItem>
                        </TextField>

                        <TextField value={formshipping.shippingadress} onChange={(e) => setFormshipping({ ...formshipping, shippingadress: e.target.value })} className={classes.inputForm} label="Shipping address " fullWidth multiline rows={3} variant='outlined' />

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={postOrder}
                            className={classes.button}
                            fullWidth
                            endIcon={<ShoppingCartIcon />}
                        >Order now</Button>
                    </form>

                </Grid>
                <Grid item xs={0} md={1} />

                {/* <Divider orientation='vertical' /> */}

                <Grid item xs={0} md={1} className={classes.grid_right_small} >
                    {/* <Divider orientation="vertical" /> */}
                </Grid>

                <Grid item xs={12} md={4} container>

                    <Hidden mdUp={true}>


                        <Accordion square className={classes.grid_right_small} style={{width:'100%'}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Grid container justify='space-between' alignItems='center' >
                                    <Typography> <ShoppingCartIcon />  Show order summary</Typography>
                                    <Typography variant='h5'> $43.00 </Typography>
                                </Grid>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Ordersummary />
                                
                            </AccordionDetails>
                        </Accordion>

                    </Hidden>

                    <Hidden smDown={true} className={classes.grid_right_small} >
                        {/* <Ordersummary /> */}
                     <Checkoutnewinformation/>
                    </Hidden>


                </Grid>

                <Grid item xs={0} md={1} className={classes.grid_right_small} />
                {/* </Paper> */}

            </Grid>
        </div>
    )
}

export default Checkoutinfo
