import React, { useState, useEffect, useContext } from "react";

import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  useTheme,
  Drawer,
  Typography,
  Divider,
  InputBase,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Darkmode from "./ColorModeSwitcher";
import lifecycle from "react-pure-lifecycle";
import Badge from "@material-ui/core/Badge";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import useStyles from "./Appbartheme";
import Authbutton from "./Authbutton";

import Modalbutton from "./Modal";
import { firebase, googleProvider } from "../../Firebase/firebase.confige";
import { useHistory } from 'react-router'
import { CartContext } from "../Cart Shopping/contexts/CartContext";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./productcheckoutdrawer.css";
import Productcarddrawer from "./Productcarddrawer";
import axios from 'axios';
import PerfectScrollbar from "react-perfect-scrollbar";
import { FcAdvance } from "react-icons/fc";

function SearchAppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [Auth, setAuth] = React.useState(false);
  const [email, setemail] = useState("");
  const [Imageurl, setImageurl] = useState("");
  const [username, setusername] = useState("");
  const [cartempty, setcartempty] = React.useState(true);
  const { push } = useHistory()
  const { cartItems, itemCount, wished, wishlist } = useContext(CartContext);

  let total = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  // Similaire à componentDidMount et componentDidUpdate :
  var currentuser = JSON.parse(localStorage.getItem("User"));
  let photo='';
let providerId =  ''
let emailuser =  ''
let displayName = ''
if (currentuser== null){
  photo=''
}
else {
  
  axios.post(`http://localhost:2000/GivemeDataofThisUser`,{currentuser})
  .then(res => {
    let DbUser=res.data[0]
   console.log(res.data[0].Picture)
   localStorage.setItem('DbUserdata', JSON.stringify(DbUser));
 let  pictur = DbUser.Picture;
let UserId = DbUser.id;
 let Email = DbUser.email;
 setemail(Email);
 setImageurl(pictur);
   
  })

}
  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    var currentuser = JSON.parse(localStorage.getItem("DbUserdata"));
 
   

    if (currentuser) {
      setAuth(true);
     
    } else {
      setAuth(false);
    }
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var currentuser = JSON.parse(localStorage.getItem("User"));
      } else {
        localStorage.removeItem("User");
        setAuth(false);
      }
    });
  }, []);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
 

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                <FcAdvance />
              </IconButton>
              <Divider />
            </div>
            <Grid container>
              <Grid item xs={6}>
                <Button disabled style={{ color: "black" }}>
                  {" "}
                  Your Cart ({itemCount})
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  style={{ color: "black", position: "relative", left: "90px" }}
                >
                  View cart
                </Button>
              </Grid>
            </Grid>
            <Divider />

            <Grid container>
              <Paper className={classes.product} elevation={0}>
                <PerfectScrollbar>
                  {cartItems.map((product) => (
                    <Productcarddrawer
                      key={product.id}
                      product={product}
                      productpictur={product.imgSrc}
                      producttitle={product.titleProduct}
                      productdescription={product.titleProduct}
                      price={product.price}
                      discount={product.discount}
                    />
                  ))}
                </PerfectScrollbar>
              </Paper>
              <Divider />
              <Grid item xs={12}>
                {(itemCount == 0 && <h3>Your cart is Empty</h3>) || (
                  <h3 className={classes.total}> Total:{total} $</h3>
                )}
              </Grid>
              <Grid item xs={12}>
              {(cartItems &&  
                 <Button
                 variant="contained"
                 className={classes.checkoutbutton}
                 color="secondary"
                 onClick={() => push('/Checkout')}
               >
                 Checkout
               </Button>
                
                ) ||
                
                
                <Button
                variant="contained"
                className={classes.checkoutbutton}
                color="secondary"
               
              >
                Checkout
              </Button>}
               
              </Grid>
            </Grid>

            <Divider />
          </Drawer>

          <Button className={classes.buttonsmall} href="#text-buttons">
            <img height="32" width="32" src={Imageurl} />
          </Button>
          <Divider orientation="horizontal" style={{ color: "white" }} />

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon style={{ color: "yellow" }} />
            </div>
            <InputBase
              style={{ color: "white" }}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <Typography className={classes.title} variant="h6" noWrap>
            {username}
          </Typography>

          <Darkmode style={{ color: "yellow" }} className={classes.darkmde} />

          <IconButton
            aria-label="show 4 new mails"
            className={classes.shoppcart}
          >
            {(Auth && (
              <Badge
                onClick={handleDrawerOpen}
                badgeContent={itemCount}
                color="secondary"
              >
                {" "}
                <ShoppingCartIcon />
              </Badge>
            )) || (
              <Badge badgeContent={itemCount} color="secondary">
                {" "}
                <ShoppingCartIcon />
              </Badge>
            )}
          </IconButton>
          {(!Auth && <Modalbutton />) || <Authbutton />}
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default SearchAppBar;
