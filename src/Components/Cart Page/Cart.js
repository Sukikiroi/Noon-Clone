import { Button, Divider, TextField, Grid, Paper, Typography } from '@material-ui/core'
import React,{useContext} from 'react'
import ProductCheckout from './productcheckout/ProductCheckout'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './cart.css'
import { useHistory } from "react-router-dom";
import Paymentmethod from './payment/Paymentmethod';
import { CartContext } from "../Cart Shopping/contexts/CartContext";
const Checkout = () => {

    const history = useHistory();
    function handleClick__go_to_prodcts() {
        history.push("/");
    }
    const {
        cartItems,
        itemCount,
        clearCart,
       
        
      } = useContext(CartContext);
    return (


        <Grid container>
            <Grid item xs={0} sm={1} ></Grid>
            <Grid container item xs={12} sm={10} >
                <Grid style={{marginBottom:'25px'}} container justify='space-between' alignItems='center'>
                    <Typography variant='h4'>
                        you have {itemCount} items
                    </Typography>
                    <button onClick={handleClick__go_to_prodcts} className='productcheckout__button' style={{fontSize:'20px'}}>Keep shopping</button>
                </Grid>
                <Grid item xs={12} sm={7} >
                  
                   
                    {cartItems.map((product) => (
                        <div>
                  <ProductCheckout
                    key={product.id}
                    product={product}
                    productpictur={product.imgSrc}
                    producttitle={product.titleProduct}
                    productdescription={product.titleProduct}
                    price={product.price}
                    discount={product.discount}
                  />
                  <Divider style={{margin:'25px 0'}}/>
                  </div>
                ))}
                </Grid>
                <Grid item xs={0} sm={1}></Grid>
                <Grid item xs={12} md={4}>
                    <Paymentmethod/>
                </Grid>
            </Grid>
            <Grid item xs={0} sm={1}></Grid>
        </Grid>
    )
}

export default Checkout
