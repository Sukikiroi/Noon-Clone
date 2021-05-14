import React ,{useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './navbar.css'
import './searchbar.css'
import { Fade, IconButton, Typography, Badge, AppBar, Toolbar, Drawer, Divider, Button, Grid, Paper, Zoom, Grow } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import Categorychoise from './Categorychoise';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Select } from "@chakra-ui/react";
import Scrollbar from 'react-perfect-scrollbar'
import useStyles from "../Navbar for Desktop and Mobile/Appbartheme";
import { FcAdvance } from "react-icons/fc";
import Productcarddrawer from '../Navbar for Desktop and Mobile/Productcarddrawer';
import { CartContext } from "../Cart Shopping/contexts/CartContext";
import SigninRegisterModal from "../Navbar for Desktop and Mobile/Modal";
import CloseIcon from '@material-ui/icons/Close';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import Cartempty from '../CartEmpty/CartEmpty';
import { Popover, Dropdown } from 'antd'
import Downloadapp from './DownloadApp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IslOgedIn from './IsLogedIn'
import Hidden from '@material-ui/core/Hidden';
import Searchbar from './search-bar/src/demo'

 


export default function NavbarLast() {
    const [searchbarinput, setsearchbarinput] = useState('');
    const [showCat, setShowCat] = useState(false)
    const [categories, setCategories] = useState([
      { url: '', image: 'https://www.retailmenot.com/tng/static/images/icons/holiday_clearance.png', name: 'Holiday' },
      { url: '', image: 'https://www.retailmenot.com/tng/static/images/icons/cashback_v3.png', name: 'Cash Back' },
      { url: '', image: 'https://www.retailmenot.com/tng/static/images/icons/shopping_v1.png', name: 'Buying Guides' },
      { url: '', image: 'https://www.retailmenot.com/tng/static/images/icons/clothing_v3.png', name: 'Clothing' },
      { url: '', image: 'https://www.retailmenot.com/tng/static/images/icons/food_v3.png', name: 'Food' },
      { url: '', image: 'https://www.retailmenot.com/tng/static/images/icons/electronics_v3.png', name: 'Electronics' },
      { url: '', image: 'https://www.retailmenot.com/tng/static/images/icons/beauty_v3.png', name: 'Beauty' },
      { url: '', image: 'https://www.retailmenot.com/tng/static/images/icons/travel_v3.png', name: 'Travel' },
      { url: '', image: 'https://www.retailmenot.com/tng/static/images/icons/more.png', name: 'More' },
  ])

  return (
    <div>
      <Grid container>
       
        <Grid item lg={6} sm={12} xs={12}>
        <br></br>
          <Paper style={{ textAlign: 'center',position:'relative',top:'20px'}} >
          <br></br>
          <br></br>
        
          <div class="search-container">
  
      <input type="text" placeholder="Search.." name="search"></input>
      <button type="submit"><i  class="fa fa-search fa-2x"></i></button>
    </div>
 

          </Paper>
        </Grid>


        <Grid item lg={6} sm={12} xs={12}>
          <Paper  style={{ textAlign: 'center'}} elevation={0}>
              

          <div onClick={() => setShowCat(!showCat)} className={`navbar2__cat ${showCat && 'navbar2__cat__opened'}`} >
                            Categories
                            <div className={`navbar2__cat__arrow ${showCat && 'navbar2__cat__arrow__animation'}`} ><ExpandMoreIcon/></div>
                        </div>


          </Paper>
        </Grid>
      
      </Grid>
    </div>
  );
}
