import React ,{useContext}from 'react';
import { CartContext } from "../Cart Shopping/contexts/CartContext";
import Paper from '@material-ui/core/Paper';

import { Badge, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles(() => ({
    root: {
        
        paddingTop: '60px',
    },
    single_row: {
        margin:'10px 0'
    },   
}));

export default function CenteredGrid({productpictur,price,product,qt}) {
  const classes = useStyles();
  const {
    cartItems,CountItem,
    itemCount,
   wished,wishlist
  } = useContext(CartContext);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid className={classes.single_row} item container justify='space-between' alignItems='center'>
                <Badge badgeContent={qt} color="primary">
                    <img style={{ border: '1px solid lightgrey', width:'75px', objectFit:'contain', borderRadius:'8px' }} src={productpictur}/>
                </Badge>
                <Typography variant='body1' >$ {price}</Typography>
            </Grid>
      </Grid>
    </div>
  );
}
