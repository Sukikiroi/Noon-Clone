import React, { useState, useContext } from "react";
import "./navbar.css";
import {
  Fade,
  IconButton,
  Typography,
  Badge,
  AppBar,
  Toolbar,
  Drawer,
  Divider,
  Button,
  Grid,
  Paper,
  Zoom,
  Grow,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Categorychoise from "./Categorychoise";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Select } from "@chakra-ui/react";
import Scrollbar from "react-perfect-scrollbar";
import useStyles from "../Navbar for Desktop and Mobile/Appbartheme";
import { FcAdvance } from "react-icons/fc";
import Productcarddrawer from "../Navbar for Desktop and Mobile/Productcarddrawer";
import { CartContext } from "../Cart Shopping/contexts/CartContext";
import SigninRegisterModal from "../Navbar for Desktop and Mobile/Modal";
import CloseIcon from "@material-ui/icons/Close";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import Cartempty from "../CartEmpty/CartEmpty";
import { Popover, Dropdown } from "antd";
import Downloadapp from "./DownloadApp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IslOgedIn from "./IsLogedIn";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import { useTheme } from "@material-ui/core/styles";
import {
  firebase,
  googleProvider,
  facebookProvider,
} from "../../Firebase/firebase.confige";
const Navbar = () => {
  const [showCat, setShowCat] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchbarinput, setsearchbarinput] = useState("");
  const [isThereistext, setisThereistext] = useState(false);

  const [categories, setCategories] = useState([
    {
      url: "",
      image:
        "https://www.retailmenot.com/tng/static/images/icons/holiday_clearance.png",
      name: "Holiday",
    },
    {
      url: "",
      image:
        "https://www.retailmenot.com/tng/static/images/icons/cashback_v3.png",
      name: "Cash Back",
    },
    {
      url: "",
      image:
        "https://www.retailmenot.com/tng/static/images/icons/shopping_v1.png",
      name: "Buying Guides",
    },
    {
      url: "",
      image:
        "https://www.retailmenot.com/tng/static/images/icons/clothing_v3.png",
      name: "Clothing",
    },
    {
      url: "",
      image: "https://www.retailmenot.com/tng/static/images/icons/food_v3.png",
      name: "Food",
    },
    {
      url: "",
      image:
        "https://www.retailmenot.com/tng/static/images/icons/electronics_v3.png",
      name: "Electronics",
    },
    {
      url: "",
      image:
        "https://www.retailmenot.com/tng/static/images/icons/beauty_v3.png",
      name: "Beauty",
    },
    {
      url: "",
      image:
        "https://www.retailmenot.com/tng/static/images/icons/travel_v3.png",
      name: "Travel",
    },
    {
      url: "",
      image: "https://www.retailmenot.com/tng/static/images/icons/more.png",
      name: "More",
    },
  ]);

  const [shippingcountries, setshippingcountries] = useState([
    { value: "UAE", name: "United Arab Emirates" },
    { value: "KSA", name: "Arabie saoudite" },
    { value: "EG", name: "Egypte" },
  ]);

  const { cartItems, itemCount, wished, wishlist } = useContext(CartContext);

  const Logo = (
    <svg
      width="50%"
      height="50%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M6.547,3.125v6.008c0,0,2.117,0,3.25-0.086c0.891-0.156,1.055-0.242,1.219-1.133l0.328-1.305h0.969l-0.164,2.852 l0.086,2.922h-0.977l-0.242-1.141c-0.242-0.812-0.57-0.977-1.219-1.055c-0.812-0.086-3.25-0.086-3.25-0.086v5.039 c0,0.969,0.492,1.383,1.625,1.383h3.414c1.055,0,2.109-0.086,2.766-1.625l0.883-1.953h0.82c-0.086,0.406-0.492,3.984-0.57,4.789 c0,0-3.086-0.078-4.383-0.078H5.25l-3.492,0.078v-0.883l1.133-0.25c0.82-0.164,1.062-0.406,1.062-1.055 c0,0,0.086-2.195,0.086-5.852c0-3.648-0.086-5.844-0.086-5.844c0-0.727-0.242-0.891-1.062-1.055L1.758,2.555V1.664l3.414,0.07h6.5 c1.297,0,3.484-0.234,3.484-0.234s-0.078,1.375-0.164,4.625h-0.891l-0.328-1.141c-0.32-1.461-0.805-2.188-1.703-2.188H6.961 C6.547,2.797,6.547,2.875,6.547,3.125z M19.703,3.766h0.977V7.18l3.336-0.164l-0.164,1.547l-3.25-0.25v6.016 c0,1.703,0.57,2.359,1.547,2.359c0.883,0,1.539-0.492,1.781-0.898l0.484,0.57c-0.484,1.133-1.859,1.703-3.164,1.703 c-1.617,0-2.93-0.969-2.93-2.836V8.398h-1.938V7.586C18.008,7.422,19.219,6.445,19.703,3.766z M26.695,14.242l0.648,1.547 c0.242,0.648,0.812,1.305,2.109,1.305c1.383,0,1.953-0.734,1.953-1.625c0-2.766-5.445-1.953-5.445-5.688c0-2.109,1.703-3.094,3.898-3.094c0.977,0,2.438,0.164,3.172,0.492c-0.164,0.812-0.25,1.867-0.25,2.68l-0.805,0.078l-0.57-1.625 c-0.164-0.398-0.82-0.727-1.625-0.727c-0.977,0-1.953,0.406-1.953,1.461c0,2.516,5.609,1.953,5.609,5.688c0,2.117-1.867,3.25-4.148,3.25c-1.703,0-3.414-0.656-3.414-0.656c0.164-0.969,0.086-2.023,0-3.086H26.695z M33.031,22.039 c0.242-0.891,0.406-2.023,0.57-3.086l0.891-0.078l0.328,1.703c0.078,0.406,0.32,0.734,0.969,0.734c1.055,0,2.438-0.648,3.742-2.922 c-0.578-1.383-2.281-5.844-3.828-9.258c-0.406-0.898-0.484-0.977-1.047-1.141l-0.414-0.156v-0.82l2.445,0.086l3-0.164V7.75 l-0.734,0.164c-0.57,0.078-0.805,0.398-0.805,0.727c0,0.086,0,0.164,0.078,0.328c0.156,0.492,1.461,4.141,2.438,6.578c0.805-1.703,2.352-5.523,2.594-6.172c0.086-0.328,0.164-0.406,0.164-0.648c0-0.414-0.242-0.656-0.805-0.812L42.039,7.75V6.938 l2.281,0.078l2.109-0.078V7.75l-0.406,0.32c-0.812,0.328-0.898,0.406-1.219,1.062l-3.57,8.359 c-2.117,4.797-4.312,5.203-5.852,5.203C34.406,22.695,33.672,22.445,33.031,22.039z"></path>
    </svg>
  );

  let total = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  const [Auth, setAuth] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  var currentuser = JSON.parse(localStorage.getItem("User"));
  console.log("user logged" + currentuser);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("user logged");
      setAuth(false);
    } else {
      console.log("he log out");
      setAuth(true);
    }
  });

  const classes = useStyles();
  return (
    <div>
      <Drawer
        onClose={handleDrawerClose}
        // className={classes.drawer}
        // variant="persistent"
        anchor="right"
        open={open}
        // className='drawerPaper'
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {/* <div >
                    <IconButton onMouseEnter={handleDrawerClose}>
                        <FcAdvance />
                    </IconButton>
                    <Divider />
                </div> */}
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
          {(itemCount !== 0 && (
            <Paper style={{ height: "730px", width: "600px" }} elevation={5}>
              <Scrollbar>
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
              </Scrollbar>
            </Paper>
          )) || <div></div>}
          <Divider />
          <Grid item xs={12}>
            {(itemCount == 0 && <Cartempty />) || (
              <h1 className={classes.total}> Total:{total} $</h1>
            )}
          </Grid>
        </Grid>

        {itemCount !== 0 ? (
          <Button
            variant="contained"
            className={classes.checkoutbutton}
            color="secondary"
          >
            Checkout
          </Button>
        ) : (
          <div></div>
        )}
      </Drawer>
      <Grid container>
        <Grid item lg={6} sm={12} xs={12}>
          <div className={classes.navbar1} style={{}}>
            <div className="navbar2">
              <div className="navbar2__searchContainer">
                <br></br>
                <input
                  value={searchbarinput}
                  onChange={(e) => setsearchbarinput(e.target.value)}
                  className="navbar2__searchContainer__input"
                  placeholder="Search for anything"
                  type="text"
                />
                {searchbarinput && (
                  <div
                    className={
                      searchbarinput
                        ? "navbar2__iconSearchinput"
                        : "navbar2__iconSearchinputnone"
                    }
                  >
                    {" "}
                    <IconButton onClick={() => setsearchbarinput("")}>
                      <CloseIcon style={{ color: "black", fontSize: 18 }} />
                    </IconButton>
                  </div>
                )}
                <div className="navbar2__searchContainer__searchicon">
                  <SearchIcon style={{ color: "white", fontSize: 30 }} />
                </div>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item lg={6} sm={12} xs={12}>
          <Paper className={classes.navbar2} elevation={0}>
            <Grid container>
              <Grid item lg={3}>
                <div
                  onClick={() => setShowCat(!showCat)}
                  className={`navbar2__cat ${
                    showCat && "navbar2__cat__opened"
                  }`}
                >
                  Categories
                  <div
                    className={`navbar2__cat__arrow ${
                      showCat && "navbar2__cat__arrow__animation"
                    }`}
                  >
                    <ExpandMoreIcon />
                  </div>
                </div>
              </Grid>

              <Grid item lg={3}>
                <Hidden smDown>
                  {(Auth && <SigninRegisterModal />) || (
                    <IslOgedIn className={classes.logedin} />
                  )}
                </Hidden>
              </Grid>
              <Grid item lg={3}>
                <IconButton>
                  <FavoriteBorderOutlinedIcon style={{ color: "black" }} />
                </IconButton>
              </Grid>
              <Grid item lg={3}>
                <IconButton onClick={handleDrawerOpen}>
                  <Badge
                    badgeContent={itemCount}
                    color="primary"
                    className={classes.cart}
                  >
                    <ShoppingCartOutlinedIcon style={{ olor: "black" }} />
                  </Badge>
                </IconButton>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={0} sm={1}></Grid>
        <Grid item xs={12} sm={10}>
          {/* <div className='navbar__rowOne' style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} >
                        <Popover content={Downloadapp} title="Download App!">
                            <button className='navbar__rowOne__item' >Save $3 with App</button>
                        </Popover>

                        <a className='navbar__rowOne__linksupport navbar__rowOne__item' >Support Center</a>

                        {/* <Dropdown overlay={Downloadapp} trigger={['click']}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Click me
                            </a>
                        </Dropdown> */}

          {/* <div className='navbar__rowOne__item' style={{ display: 'flex' }} >
                            <h3  className='shipto' >Ship to:</h3>
                            <Select className='shiptoOptions' maxWidth={'32'} defaultValue='option2' variant='unstyled'>
                                <option value="KSA">KSA</option>
                                <option value="UAE">UAE</option>
                                <option value="EG">Egypte</option>
                            </Select>
                        </div>

                    </div>  */}

          {/* 

                    <div className='navbar2' >
                        <Typography style={{ flex: 0.3 }} > LOGO </Typography>

                        <div className='navbar2__searchContainer'style={{width:'10px'}}  >
                            < input value={searchbarinput} onChange={(e) => setsearchbarinput(e.target.value)} className='navbar2__searchContainer__input' placeholder='Search for anything' type='text' />
                            {searchbarinput && <div className={searchbarinput ? 'navbar2__iconSearchinput' : 'navbar2__iconSearchinputnone'}> <IconButton onClick={() => setsearchbarinput('')}>
                                <CloseIcon style={{ color: 'black', fontSize: 18 }} />
                            </IconButton></div>}
                            <div className='navbar2__searchContainer__searchicon'>
                                <SearchIcon style={{ color: 'white', fontSize: 30 }} />
                            </div>
                        </div>

                        <div onClick={() => setShowCat(!showCat)} className={`navbar2__cat ${showCat && 'navbar2__cat__opened'}`} >
                            Categories
                            <div className={`navbar2__cat__arrow ${showCat && 'navbar2__cat__arrow__animation'}`} ><ExpandMoreIcon/></div>
                        </div>



                        {(!Auth && <SigninRegisterModal />) ||<IslOgedIn/>}
                     

                        <IconButton >
                            <FavoriteBorderOutlinedIcon style={{ color: 'black' }} />
                        </IconButton>

                        <IconButton onClick={handleDrawerOpen}>
                            <Badge badgeContent={itemCount} color='primary' >
                                <ShoppingCartOutlinedIcon style={{ color: 'black' }} />
                            </Badge>
                        </IconButton>






                    </div> */}
        </Grid>
        <Grid item xs={0} sm={1}></Grid>
      </Grid>

      {showCat && (
        <Fade in={showCat}>
          <div className="navbar2__cat__choices">
            {categories.map((cat) => (
              <Categorychoise image={cat.image} name={cat.name} />
            ))}
          </div>
        </Fade>
      )}
    </div>
  );
};

export default Navbar;
