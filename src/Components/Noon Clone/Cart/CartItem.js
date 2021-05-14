import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
const Cartitem = ({ CartItem_Image }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      height: "190px",
      marginBottom: "10px",
      display: "flex",
      justifyContent: "center",
    },
    cartitem: {
      width: "80%",
      height: "190px",

      display: "flex",
    },
    cartitem_img: {
      width: "120px",
      height: "100%",
      "& img": {
        maxWidth: "100%",
        maxHeight: "100%",
      },
    },
    cartitem_info: {
      height: "100%",
       
      width: "55%",
    },

    cartitem_info_brand: {
      width: "100%",
      margin: "auto",

      "& h1": {
        color: "grey",
        fontSize: "14px",
      },
    },

    cartitem_info_title_price: {
      width: "100%",
      margin: "auto",
      "& strong": {
        whiteSpace: "nowrap",
      },
      "& h1": {
        fontSize: "12px",
        fontWeight: "bolder",
      },
      display: "flex",
      justifyContent: "space-between",
    },
    cartitem_info_delevry_time: {
      width: "100%",
      margin: "auto",
      marginTop: "10px",

      "& h1": {
        color: "grey",
        fontSize: "10px",
      },
    },
    cartitem_info_delevry_time2: {
      width: "100%",
      margin: "auto",

      "& h1": {
        color: "grey",
        fontSize: "10px",
      },
    },
    cartitem_price_delevry_company: {
      width: "21%",
      height: "100%",

      display: "block",
    },
    cartitem_price_delevry_company_price: {
      width: "100%",
      height: "50%",
      display: "flex",    
      alignContent:'center',      
      '& strong':{
        marginLeft: '5px',
        fontSize:'18px'
      },
      '& p':{
        color: 'rgb(126, 133, 155)',
        fontSize: '14px',
        lineHeight: '28px',
      },
    },
    cartitem_price_delevry_company_delevry: {
      width: "100%",
      height: "50%",
 
alignItems:'center',
      display: "flex",
      justifyContent: "center",
      '& img':{
        height:'16px'
      }
    },
    cartitem_info_buttons:{
      width: "100%",
      height:'50px',
    
      display:'flex',
      
      '& Button':{
        textTransform:'capitalize',
        fontSize:'10px'
      }
    }
  }));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.cartitem}>
        <div className={classes.cartitem_img}>
          <img
            width="100%"
            height="100%"
            src={CartItem_Image}
            alt="Men's Stainless Steel Analog Watch 8227"
          />
        </div>
        <div className={classes.cartitem_info}>
          <div className={classes.cartitem_info_brand}>
            <h1>KRAWN</h1>
          </div>

          <div className={classes.cartitem_info_title_price}>
            <h1>7-Speed Hand Mixer 120W KW-49001 White</h1>
          </div>
          <div className={classes.cartitem_info_delevry_time}>
            <h1>Order in 6 hrs 31 mins</h1>
          </div>
          <div className={classes.cartitem_info_delevry_time2}>
            <h1>Delivered between Tomorrow - May 3</h1>
          </div>
      
      <div  className={classes.cartitem_info_buttons}></div>
      <div  className={classes.cartitem_info_buttons}>

<Button  startIcon={<FavoriteBorderIcon />}>Move To Wishlist</Button>
<Button  startIcon={<DeleteOutlineIcon />}>Remove</Button>  
 

      </div>
      
        </div>
      
      
        <div className={classes.cartitem_price_delevry_company}>
          <div className={classes.cartitem_price_delevry_company_price}>
           <p>SAR</p>  <strong> 2300.00</strong> 
          </div>

          <div className={classes.cartitem_price_delevry_company_delevry}>
            <img
              src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg"
              alt="noon-express"
              height="20px"
              width="80px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
