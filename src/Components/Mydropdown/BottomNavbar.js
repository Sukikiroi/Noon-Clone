import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import HomeIcon from "@material-ui/icons/Home";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import CategoryIcon from "@material-ui/icons/Category";
import Badge from "@material-ui/core/Badge";
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  
  root:{
 
    width:'100%',
    height:'50px',
    position:'fixed',
    bottom:'0px',
    backgroundColor:'white',
    display:'flex',
    
  },
  bottom_button:{
    width:'20%',
    height:'40px',
    
    display:'block',
    
    paddingLeft:'20px',
    paddingRight:'20px',
    '& h1':{
      whiteSpace:'nowrap',
      fontSize:'12px'
    }
    
  }
}));

const Bottomnavbar = () => {
  const classes = useStyles();
  return (
    <div  className={classes.root}>
  <div className={classes.bottom_button} >
  <img style={{ border :'gold'}} src="https://z.nooncdn.com/s/app/com/noon/images/bottomNav/home-inactive.svg" alt="المنزل"/>
  <h1>Home</h1>
  </div>
  <div className={classes.bottom_button} >
  <img src="https://z.nooncdn.com/s/app/com/noon/images/bottomNav/account-inactive.svg" alt="حسابي"/>
  <h1>Account</h1>

  </div>
  <div className={classes.bottom_button} >
  <img  src="https://z.nooncdn.com/s/app/com/noon/images/bottomNav/categories-v2-inactive.svg" alt="الفئات"/>
  <h1>Category</h1>
  </div>
  <div className={classes.bottom_button} >
  <img src="https://z.nooncdn.com/s/app/com/noon/images/bottomNav/trending-inactive.svg" alt="عليها طلب "/>
  <h1>Top</h1>
  </div>
  <div className={classes.bottom_button} >

  <img src="https://z.nooncdn.com/s/app/com/noon/images/bottomNav/cart-inactive.svg" alt="عربة التسوق"/>
  <h1>Cart</h1>
  </div>
 
    </div>
  );
};

export default Bottomnavbar;
