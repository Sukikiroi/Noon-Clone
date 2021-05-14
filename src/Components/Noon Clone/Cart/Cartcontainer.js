import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CartItem from "./CartItem";
import Paper from "@material-ui/core/Paper";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root_cart: {
    width: "90%",
    height: "100%",

    marginLeft: "10px",
    display: "block",
  },
  root_cartitem_title: {
    width: "80%",
    height: "40px",
    fontFamily: "sans-serif",
 
    marginBottom: "20px",
    display: "flex",
    alignContent: "center",
    alignItems:'center',
    justifyContent:'space-between',
    '& Button':{
   textTransform:'capitalize'

    }
    ,
    "& strong": {
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "26px",
      lineHeight: "25px",
      color: "rgb(51, 51, 51)",
    },
    "& p": {
      fontFamily: " sans-serif",
      fontSize: "14px",
      lineHeight: "28px",
      color: "rgb(126, 133, 155)",
      marginLeft: "5px",
    },
  },
  root_cart_image: {
    width: "90%",
    height: "120px",
    marginBottom: "30px",
  },
  root_ordersumry: {
    width: "90%",
    height: "400px",
    border: "2px solid rgba(198, 204, 221, 0.5)",
    marginLeft: "20px",
    borderRadius: "6px ",
    position: "sticky",

    top: "15px",
  },
  order_sumry: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "sticky",
    height: "80%",
    top: "15px",
  },
  order_sumry_info: {
    width: "90%",
    height: "70%",

    display: "flex",
    flexDirection: "column",
  },
  order_sumry_button: {
    width: "90%",
    height: "300px",
    marginTop: "50px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  order_sumry_title: {
    width: "100%",
    height: "30px",

    fontSize: "1.366rem",
    fontWeight: "bold",
    marginBottom: "10px",
    marginTop: "10px",
  },
  order_sumry_coupon: {
    width: "100%",
    height: "50px",

    display: "flex",
  },
  order_sumry_coupon_input: {
    width: "100%",
    height: "45px",
    border: "1px solid rgba(198, 204, 221, 0.5)",
    borderBottomLeftRadius: "6px",
    borderTopLeftRadius: "6px",
    paddingLeft: "10px",
    outline: "none",
  },
  order_sumry_coupon_apply: {
    minWidth: "70px",
    fontSize: "1rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: "10px",
    borderRightRadius: "6px",
    height: "45px",
    color: "white",
    backgroundColor: "rgb(56, 102, 223)",
    borderBottomRightRadius: "6px",
    borderTopRightRadius: "6px",
  },
  order_sumry_subtotal: {
    width: "100%",
    height: "30px",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& h1": {
      color: " rgb(126, 133, 155)",
      fontWeight: "normal",
      fontSize: "1.12667rem",
    },
  },
  order_sumry_shipping: {
    width: "100%",
    height: "40px",
    borderBottom: "1px solid rgba(198, 204, 221, 0.5)",
    paddingBottom: "10px",
    borderTopStyle: "none",
    borderRightStyle: "none",
    borderLeftStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& h1": {
      color: " rgb(126, 133, 155)",
      fontWeight: "normal",
      fontSize: "1.12667rem",
    },

    "& strong": {
      color: "blue",
      fontWeight: "normal",
      fontSize: "1.3rem",
      fontFamily: "Roboto ",
    },
  },
  order_sumry_Total: {
    width: "100%",
    height: "50px",
    "& strong": {
      color: "black",
      fontWeight: "normal",
      fontSize: "1.2rem",
      fontFamily: "Roboto ",
    },
    "& h1": {
      color: " rgb(126, 133, 155)",
      fontWeight: "normal",
      fontSize: "0.8rem",
    },
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  order_sumry_button_checkout: {
    width: "100%",
    height: "50px",
    backgroundColor: "rgb(56, 102, 223)",
    color: "white",
    borderRadius: "6px",
    fontSize: "1.08333rem",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  root_cart_continu_button: {
    height: "60px",
    marginTop: "40px",
    paddingTop: "10px",

    display: "flex",
    justifyContent: "center",
  },
  continu_shoppingbutton: {
    border: "2px solid dodgerblue",
    color: "dodgerblue",
    height: "90%",
    borderRadius: "6px",
    textTransform: "capitalize",
  },
}));
const Cartcontainer = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item lg={8} xs={12}>
          <div className={classes.root_cart}>
            <div
              style={{
                width: "100%",
                margin: "auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className={classes.root_cartitem_title}>
                <div style={{display:'flex'}}>
                <strong>Cart </strong>
                <p>(3 item)</p>
                </div>
               
                <Button    startIcon={<ArrowBackIcon />} variant="outlined" color="primary">
                Continue Shopping
                </Button>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                margin: "auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className={classes.root_cart_image}>
                <img
                  style={{ borderRadius: "8px", height: "100%" }}
                  src="https://k.nooncdn.com/cms/pages/20210426/409cf52c498df0939963178c1faec970/en_cart-ksa.png"
                  alt="Logo"
                />
              </div>
            </div>

            <CartItem
              CartItem_Image={
                "https://z.nooncdn.com/products/tr:n-t_120/v1540820670/N12012022A_1.jpg"
              }
            />
            <CartItem
              CartItem_Image={
                "https://z.nooncdn.com/products/tr:n-t_120/v1606407160/N39843845A_1.jpg"
              }
            />
            <CartItem
              CartItem_Image={
                "https://z.nooncdn.com/products/tr:n-t_120/v1592221002/N38650144A_1.jpg"
              }
            />
            <CartItem
              CartItem_Image={
                "https://z.nooncdn.com/products/tr:n-t_120/v1605814220/N41044065A_1.jpg"
              }
            />
            <CartItem
              CartItem_Image={
                "https://z.nooncdn.com/products/tr:n-t_240/v1605900913/N36061298A_1.jpg"
              }
            />
            <CartItem
              CartItem_Image={
                "https://z.nooncdn.com/products/tr:n-t_120/v1576494379/N32776663A_1.jpg"
              }
            />
            <CartItem
              CartItem_Image={
                "https://z.nooncdn.com/products/tr:n-t_120/v1606407160/N39843845A_1.jpg"
              }
            />
            <CartItem
              CartItem_Image={
                "https://z.nooncdn.com/products/tr:n-t_120/v1592221002/N38650144A_1.jpg"
              }
            />
            <CartItem
              CartItem_Image={
                "https://z.nooncdn.com/products/tr:n-t_120/v1605814220/N41044065A_1.jpg"
              }
            />
            <CartItem
              CartItem_Image={
                "https://z.nooncdn.com/products/tr:n-t_240/v1605900913/N36061298A_1.jpg"
              }
            />
            <CartItem
              CartItem_Image={
                "https://z.nooncdn.com/products/tr:n-t_120/v1576494379/N32776663A_1.jpg"
              }
            />
            <CartItem
              CartItem_Image={
                "https://z.nooncdn.com/products/tr:n-t_120/v1606407160/N39843845A_1.jpg"
              }
            />
            <CartItem
              CartItem_Image={
                "https://z.nooncdn.com/products/tr:n-t_120/v1592221002/N38650144A_1.jpg"
              }
            />
            <div className={classes.root_cart_continu_button}>
              <Button
                className={classes.continu_shoppingbutton}
                variant="outlined"
              >
                Continu Shopping
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item lg={4} xs={12}>
          <div className={classes.root_ordersumry}>
            <div className={classes.order_sumry}>
              <div className={classes.order_sumry_info}>
                <div className={classes.order_sumry_title}>Order Summary</div>
                <div className={classes.order_sumry_coupon}>
                  <input
                    className={classes.order_sumry_coupon_input}
                    placeholder="Coupon code or gift card"
                    type="text"
                  />
                  <button className={classes.order_sumry_coupon_apply}>
                    Apply
                  </button>
                </div>
                <div className={classes.order_sumry_subtotal}>
                  <h1> Subtotal (1 item)</h1>
                  <h1>SAR 2199.00</h1>
                </div>
                <div className={classes.order_sumry_shipping}>
                  <h1> Shipping</h1>
                  <strong>Free</strong>
                </div>
                <div className={classes.order_sumry_Total}>
                  <h1>
                    {" "}
                    <strong>Total</strong> (Inclusive of VAT)
                  </h1>
                  <strong>SAR 2199.00</strong>
                </div>
              </div>
              <div className={classes.order_sumry_button}>
                <button className={classes.order_sumry_button_checkout}>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cartcontainer;
