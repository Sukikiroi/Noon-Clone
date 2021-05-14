import React,{useContext} from 'react'
import { Badge, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import Productincheckout from './Productincheckout'
import { CartContext } from "../Cart Shopping/contexts/CartContext";
import PerfectScrollbar from 'react-perfect-scrollbar'
const useStyles = makeStyles(() => ({
    root: {
        
        paddingTop: '60px',
    },
    single_row: {
        margin:'10px 0'
    },   
}));


const Ordersummary = () => {
    const {
        cartItems,CountItem,
        itemCount,
       wished,wishlist,total
      } = useContext(CartContext);
    const classes = useStyles()
    return (
        <Grid container direction='column' className={classes.root} alignItems='stretch'>
         
           {cartItems.map((product) => (
                
                  <Productincheckout
                    key={product.id}
                    product={product}
                    productpictur={product.imgSrc}
                    producttitle={product.titleProduct}
                    productdescription={product.titleProduct}
                    price={product.price}
                    discount={product.discount}
                  />
                   
                ))}
         
        
            <Divider />

            <Grid className={classes.single_row} item container justify='space-between' alignItems='center'>   
                <Typography variant='h6' >Subtotal</Typography>
                <Typography variant='h6' >${total}</Typography>
            </Grid>

            <Grid className={classes.single_row} item container justify='space-between' alignItems='center'>   
                <Typography variant='h6' >Shipping</Typography>
                <Typography variant='h6' >$5</Typography>
            </Grid>

            <Divider/>
            {(parseInt(total)!=0 &&  <Grid className={classes.single_row} item container justify='space-between' alignItems='center'>   
                <Typography variant='h6' ><span> Total</span></Typography>
                <Typography variant='h6'> <span>usd</span> ${parseInt(total)+5}</Typography>
            </Grid>) || "Cart Is Empty"}
           

        </Grid>
    )
}

export default Ordersummary
