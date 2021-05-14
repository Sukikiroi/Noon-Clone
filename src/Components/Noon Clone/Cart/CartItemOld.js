import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const Cartitem = ({CartItem_Image}) => {
    const useStyles = makeStyles((theme) => ({
      root:{
        width: "100%",
        margin:' auto',
       
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      },
      root_cartitem: {
        width: "100%",
        height: "200px",
        marginBottom: "10px",
        display: "flex",
        
      },

      cartitem_img: {
        
        height: "100%",
        width: "30%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
        '& img':{
          maxWidth:'100%',
          
        }
      },
      cartitem_info: {
        height: "100%",
        width: "70%",
      },
      cartitem_brand_price: {
        width: "100%",
        height: "40px",
        "& h1": {
          fontSize: "18px",
          color: "grey",
        },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
      cartitem_info_price: {
        height: "100%",
        width: "40%",

        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        "& strong": {
          fontSize: "18px",
          fontWeight: "bold",
        },
        "& h1": {
          color: "grey",
        },
      },
      cartitem_title: {
        width: "100%",
        "& h1": {
          fontSize: "14px",
          fontWeight: "600",
          lineHeight: "16px",
        },

        margin: "0 auto",
      },
      cartitem_delevry_time:{
        width: "100%",
        height:'40px',
       
        display:'flex',
        alignItems:'center'
      },
      cartitem_buttons:{
        width: "100%",
        height:'60px',
      
        display:'flex',
      
        '& Button':{
          textTransform:'capitalize',
          whiteSpace:'nowrap'
        }
      }
    })); ;


    const classes = useStyles();
    return (
      <div className={classes.root}>



     
      <div className={classes.root_cartitem}>

      <div  className={classes.cartitem_img}>
      <img  src={CartItem_Image} alt="Logo" />
      </div>
      <div  className={classes.cartitem_info}>
<div  className={classes.cartitem_brand_price}>
  <div><h1> Apple</h1></div>
<div  className={classes.cartitem_info_price}><h1> USD </h1><strong>300.00</strong></div>

</div>
<div  className={classes.cartitem_title}>
<h1>iPhone 11 Pro With FaceTime Midnight Green 256GB 4G LTE - International Specs</h1>

</div>
<div className={classes.cartitem_delevry_time}>
  <h1>Order in 7 hrs 56 mins</h1>
</div>
<div className={classes.cartitem_buttons}>
<Button  startIcon={<FavoriteBorderIcon />} >Move to wish  </Button>
<Button  startIcon={<DeleteOutlineIcon />} >Remove </Button>

</div>
      </div>
      </div>
      </div>
    );
}

export default Cartitem
