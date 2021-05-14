import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "190px",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
  },
  root_seconde: {
    width: "95%",
    height: "190px",

    backgroundColor: "white",
    display: "flex",
  },
  cartitem_info: {
    width: "70%",
    height: "190px",
  },
  cartitem_right: {
    width: "30%",
    height: "190px",

    display: "block",
  },
  cartitem_img: {
    width: "100%",
    height: "60%",
 
    "& img": {
      maxHeight: "100%",
      maxWidth: "100%",
    },
  },
  cartitem_right_shipping_company: {
    width: "100%",
    height: "20%",
    '& img':{
      height:'19px'
    }
  },
  cartitem_right_remove_button: {
    width: "100%",
    height: "20%",
    display:'flex',
    '& Button':{
        textTransform:'capitalize',
        fontSize:'12px',
        lineHeight: '16px',
    }
  },
  cartitem_info_title:{
    width:'100%',
    margin:'auto',
    '& h1':{
      fontSize:'100%',
      position: 'relative',
    lineHeight:' 1.4rem',
    height:' calc(2.8rem)',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    }
  },
  cartitem_info_price:{
    width:'100%',
    margin:'auto',
    display:'flex',
    marginTop:'20px',
 
    '& h1':{
      fontSize:'14px'
    },
    '& h2':{
      fontSize:'18px',
      fontWeight:'bold'
    }


  },
  cartitem_info_delevry_time:{
    width:'100%',
    margin:'auto',
    marginTop:'10px',
    display:'flex',
    '& h2':{
      color:'green'
    }
  }
}));
const Cartitemformobile = ({ CartItem_Image }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.root_seconde}>
        <div className={classes.cartitem_info}>
         <div className={classes.cartitem_info_title}>
       <h1>iPhone 11 Pro With FaceTime Midnight Green 256GB 4G LTE - International Specs</h1> 
           </div> 
<div  className={classes.cartitem_info_price}>
<h1>SAR</h1> <h2>2355.00</h2>

</div>


<div  className={classes.cartitem_info_delevry_time}>
  <h1>Delivered between</h1> :<h2>  May 4 - May 6</h2> 

</div>



        </div>
        <div className={classes.cartitem_right}>
          <div className={classes.cartitem_img}>
            <img src={CartItem_Image} alt="Logo" />
          </div>
          <div className={classes.cartitem_right_shipping_company}>
          <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" alt="noon-express" height="20px" width="80px"/>
          </div>
          <div className={classes.cartitem_right_remove_button}>
            
          <img src="https://z.nooncdn.com/s/app/com/noon/icons/trash.svg" alt="Remove" width="14px"/>
            <Button >Remove</Button>
         
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitemformobile;
