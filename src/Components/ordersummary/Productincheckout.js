import React ,{useContext}from 'react';
import { CartContext } from "../Cart Shopping/contexts/CartContext";
import Paper from '@material-ui/core/Paper';

import { Badge, Divider, Grid, makeStyles, TextField, Typography } from "@material-ui/core";
const useStyles = makeStyles(() => ({
    root: {
        
        paddingTop: '60px',
    },
    single_row: {
        margin:'10px 0'
    },   
}));

export default function CenteredGrid({productpictur,price,product,is_in_wishlist}) {
  const classes = useStyles();
  
  const {
    cartItems,CountItem,
    itemCount,
   wished,wishlist
  } = useContext(CartContext);
  console.log(cartItems)
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid className={classes.single_row} item container justify='space-between' alignItems='center'>
                <Badge badgeContent={product.quantity} color="primary">
                  
                    <img style={{ border: '1px solid lightgrey', width:'75px', objectFit:'contain', borderRadius:'8px' }} src={productpictur}/>
                </Badge>
                <Typography variant='body1' > Note:{product.Note}</Typography>
                <Typography variant='body1' > ${product.price}</Typography>
            </Grid>
      </Grid>
    </div>
  );
}
