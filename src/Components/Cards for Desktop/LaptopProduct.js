import React, { useContext } from 'react'
import { Card } from "antd";
import { Typography, Grid, Paper, makeStyles, IconButton } from "@material-ui/core";

import './LaptopProduct.css'
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { CartContext } from '../Cart Shopping/contexts/CartContext'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import RedeemIcon from '@material-ui/icons/Redeem';


const useStyles = makeStyles({
    discount: {
        backgroundColor: 'red',
    },
    favorite: {
        color: '#E1306C',
        outline: 'nonde',

    },
    add_to_Cart: {
        color: '#fff',
        backgroundColor: '#000',
        '&:hover': {
            backgroundColor: '#000'
        },
        width: '100%',
        height: '100%'
    },
});

const Products = ({ imgSrc, titleProduct, price, discount, Category, id,oldPrice, freeShipping, bestseller, rating, product, imgSrc2, is_wished, is_added_to_cart, handle_change_is_wished, handle_change_is_added_to_cart }) => {

    const classes = useStyles();
    const { addProduct, cartItems, increase, removeProduct, decrease, itemCount, wished } = useContext(CartContext);
    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }




    const preventDefault = (event) => event.preventDefault();

    const renderRating = (rating) => {
        const integerPart = Math.floor(rating)
        const decimalPart = rating - integerPart
        const fullStar = <StarIcon />
        const array = []
        for (let index = 0; index < integerPart; index++) {
            array.push(<StarIcon />)
        }
        for (let index = 0; index < decimalPart; index++) {
            array.push(<StarHalfIcon />)
        }
        return (
            array.map(star => (
                star
            ))
        )
    }


    return (
        // <Grid item xs={12} sm={6} md={3}>
        // item xs={12} sm={6} md={3} lg={2}

        <div className='product'  >

            <div className='product__container'>

                {/* <Grid container justify='center' > */}
                <div className='product__images' >
                    <img src={imgSrc} alt='' className='product__image1' />
                    {imgSrc2 && <img src={imgSrc2} alt='' className='product__image2' />}
                </div>
                {/* </Grid> */}
                <Typography noWrap variant='body1' >
                    <a href={"/Productpage/" + id} class="active"> {titleProduct}</a>
                </Typography>

                <div className='product__infocontainer' >
                    <Typography variant='body1' className='product__price' >
                        USD {price}
                    </Typography>
                    {oldPrice && <div className='product__price__old'>
                        {oldPrice}
                    </div>}
                </div>

                <div className='product__rating' >
                    {renderRating(rating)}<span>(3456)</span>
                </div>

                <div className='product__tags_container' >
                    {bestseller && <div className='product__best__seller' >
                        <RedeemIcon />
                        <span>Bestseller</span>
                    </div>}
                    {freeShipping && <div className='product__freeShipping'>
                        <span>FREE SHIPPING</span>
                    </div>}
                    {<div className='product__istrending'>
                        <span>TRENDING</span>
                    </div>}
                </div>

                

               

                <span className='product__discount' >
                    -{discount}% SALE
        </span>

                <span onClick={() => { wished(product) }} className='product__isWish' >
                    {false ? <IconButton className={classes.favorite} >
                        <FavoriteIcon />
                    </IconButton> : <IconButton className={classes.favorite}>
                            <FavoriteBorderIcon />
                        </IconButton>}

                </span>
            </div>


            <div className='product__addtocart' >
                <Button variant='contained' color='primary' disabled={isInCart(product)} onClick={() => { addProduct(product) }} className={classes.add_to_Cart} startIcon={<AddShoppingCartIcon />}  >
                    {isInCart(product) ? 'added' : 'add to cart'}
                </Button>
            </div>


        </div>

        // </Grid>
    )
}

export default Products
