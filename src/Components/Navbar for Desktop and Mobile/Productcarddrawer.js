import React, { useState, useEffect, useContext } from "react";
import "./productcheckoutdrawer.css";
import { Button, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import useStyles from "./Appbartheme";
import { CartContext } from "../Cart Shopping/contexts/CartContext";
export default function Productcarddrawer({
  productpictur,
  producttitle,
  productdescription,
  id,
  product,
  price,
  discount,
}) {
  const [productq, setproduct] = useState({
    imagesrc:
      "//cdn.shopify.com/s/files/1/0356/4008/2491/products/product-image-1017689827_medium.jpg?v=1586282477",
    name: '20" Dog Folding Cage',
    qt: 1,
    priceold: 150,
    pricenew: 100,
  });
  const {
    cartItems,
    itemCount,
    clearCart,
    checkout,
    removeProduct,
    removewished,
    handleCheckout,
    increase,
    decrease,
  } = useContext(CartContext);
  const handleincrement = (qt) => {
    // setproduct({ ...product, qt: qt + 1 });
    increase(product);
  };
  const handledecrement = (qt) => {
  
    
    decrease(product);
    // setproduct({ ...product, qt: qt - 1 });
  };
   
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={4}>
          <Paper className={classes.picturproduct} elevation={0}>
            <img className={classes.img} alt="complex" src={productpictur} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <h3> {producttitle}</h3> <br></br>
          <h3> Blue</h3> <br></br>
          <h3>
            {" "}
            ${price} (${discount} ){" "}
          </h3>{" "}
          <br></br>
          <div className="Productcheckout__buttons">
            <Button
              onClick={() => handleincrement(product.quantity)}
              className="Productcheckout__addbuttons"
            >
              +
            </Button>
            <p className="Productcheckout__qyt"> <div>{(product.quantity==0 &&  removeProduct(product)) || <div> {product.quantity}</div> }</div> </p>
            <Button
              disabled={product.quantity === 0}

              onClick={() =>{   handledecrement(product.quantity)}}
              className="Productcheckout__minusbuttons"
            >
              -
            </Button>
          </div>
        </Grid>

        <Grid item xs={2}>
          <IconButton aria-label="delete">
            <DeleteIcon
              className={classes.deleteicon}
              onClick={() => removeProduct(product)}
            />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}
