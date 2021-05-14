import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Divider from "@material-ui/core/Divider";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Badge from '@material-ui/core/Badge';
import FlagIcon from '@material-ui/icons/Flag';
import Accountdropdown from "./AccountDropdown";

const useStyles = makeStyles((theme) => ({
  root_noonnavbar: {
    height: "65px",
    display: "flex",
   justifyContent:'center',
    alignitems: "cnter",

    backgroundColor: "rgb(254, 238, 0)",
  },
  img: {
    maxWidth: "100%",
    display: "block",
  },
  containerinput: {
    flex:'1',
    display: "flex",
    position: "relative",
    zIndex: "50",
    borderRadius: "5px",
    margin: "0",
    padding: "0",
    border: "0",
    backgroundColor: "rgb(255, 255, 255)",
    width: "100%",
    height: "36px",
    borderRadius: "5px",
    marginTop: "12px",
  },
  searchinput: {
    width: "100%",
    padding: "12px",
    border: "0px none",
    height: "36px",
    borderRadius: "5px",
    backgroundColor: "transparent",
    fontSize: "1rem",
    color: "inherit",
  },
  bigcontainer: {
    flex: " 1 1 0%",
    margin: "0px 30px",
  },
  signcontainer: {
    width: "70px",
    display: "flex",
    justifyContent: "space-between",
    alignitems: "cnter",
    marginTop: "14px",
    marginLeft: "10px",
    marginRight: "15px",
    whiteSpace:'nowrap',
    texttransform:'capitalize',
    fontWeight:'bold'
  },
  cartcontainer: {
    width: "65px",
    display: "flex",
    justifyContent: "space-between",
    alignitems: "cnter",
    marginTop: "14px",
    marginLeft: "10px",
    marginRight: "15px",
    fontSize:'1rem',
  },
  languecontainer:{
      fontWeight:'700',
      fontSize:'1rem',
      fontfamily:'cairo',
      cursor:'pointer',
      display:'felx',
      alignitems:'center',
      marginTop: "14px",
      marginLeft: "10px",
    marginRight: "15px",
  },
  shippingcontainer:{
    width: "80px",
    display:'felx',
    alignitems:'center',
    justifyContent: "space-between",
    marginTop: "17px",
    marginLeft: "10px",
    marginRight: "15px",
    whiteSpace:'nowrap'
  },

    buttons_container:{
      width:'40%',
      height:'50px',
  
      marginTop:'5px',
      paddingLeft:'10px',
      display:'flex',
       
      alignContent:'center',
      alignItems:'center',
    },
    box:{
      width:'20%',
      height:'50px',
      display:'flex',
    
      alignContent:'center',
      alignItems:'center',
      padding:'0px 10px 0px 10px',
      
      '& img':{
        width: '25px',
      },
      '& Badge':{
      fontSize:'10px',
      color:'grey'
      },
      '& span':{
        fontWeight:'bold',
        fontSize:'14px',
        fontfamily:'sans-serif',
        marginLeft:'5px'
      }
      ,
      '& Button':{
       whiteSpace:'nowrap',
       color:'black',
       fontSize: '0.833333rem',
       fontWeight: '400',
        texttransform:'capitalize ',
        fontfamily:'sans-serif',
      }
      
    },
    box_cart:{
      width:'25%',
      height:'50px',
      display:'flex',
       
      justifyContent:'center',
      alignitems:'center',
      paddingTop:'6px'
      
    },
    box_shipping:{
      width:'30%',
      height:'50px',
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      padding:'0px 10px 0px 10px',
      
    }
}));
const Noonnavbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root_noonnavbar}>
      <img
        className={classes.img}
        src="https://k.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg"
        alt="noon"
      />
      <div className={classes.bigcontainer}>
        <div className={classes.containerinput}>
          <input
            className={classes.searchinput}
            type="text"
            placeholder="What Are you loking for ?"
          />
        </div>
      </div>



    <div  className={classes.buttons_container}>
   <div className={classes.box}>
   <div style={{fontWeight: '500',fontSize:'20px',fontFamily: "Droid Arabic Kufi",cursor: 'pointer',}}>العربية</div>
   </div>
   <div className={classes.box}></div>
   <div className={classes.box_cart}>
   <Accountdropdown/>
   </div>
   <div className={classes.box}>
   <span>Wishlist</span>
     <Badge badgeContent={4} color="primary">
     <img alt="wishlist" src="https://z.nooncdn.com/s/app/com/noon/icons/wishlist.svg" class="wishlistIcon"/>
</Badge>
   </div>
   <div className={classes.box}>
     <span>Cart</span>
     <Badge badgeContent={4} color="primary">
     <img alt="cart" src="https://z.nooncdn.com/s/app/com/noon/icons/cart.svg" class="cartIcon"/>
</Badge>
 

   </div>
    </div>


    </div>
  );
};

export default Noonnavbar;
