import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { CartContext } from "../Cart Shopping/contexts/CartContext";
import PerfectScrollbar from 'react-perfect-scrollbar'
import Wishlistpage from './WishlistPage'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const {
    wishlist,
    } = useContext(CartContext);
  return (
    <div className={classes.root}>
     <Wishlistpage/>
    </div>
  );
}
