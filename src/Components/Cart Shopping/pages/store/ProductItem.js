import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

import { Card } from "antd";
import { Typography, Grid, Paper, makeStyles } from "@material-ui/core";


import Button from '@material-ui/core/Button';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
const ProductItem = ({product}) => {

    const { addProduct, cartItems, increase } = useContext(CartContext);

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }

    return ( 
        <div className="card card-body">
            
            <img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="img-fluid" 
            src={product.photo + '?v=' + product.id} alt=""/>
            <p>{product.name}</p>
            <h3 className="text-left">{product.price}</h3>
            <div className="text-right">
                <Link  to="/" className="btn btn-link btn-sm mr-2">Details</Link>

                {
                    isInCart(product) && 
                    <button 
                    onClick={() => increase(product)}
                    className="btn btn-outline-primary btn-sm">Add more Baby</button>
                }

                {
                    !isInCart(product) && 
                    <Button variant="outlined" color="primary"
                    onClick={() => addProduct(product)}
                    className="btn btn-primary btn-sm">Add to cart Baby   </Button>
                }
               
            </div>
        </div>
     );
}
 
export default ProductItem;