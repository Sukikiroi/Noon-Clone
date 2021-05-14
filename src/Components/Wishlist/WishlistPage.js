import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Typography, Grid, Divider, Hidden } from "@material-ui/core";
import ProductWishList from './ProductWishList';
// import PeopleOftenBuy from '../../components/pplOftenbuy/PeopleOftenBuy';

const WishlistPage = () => {
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '75%', color: 'gray', margin: '5% 0' }} >
                <FavoriteBorderIcon style={{ fontSize: '60px' }} />
                <Typography align='center' variant='h2' >My Wishlist</Typography>
            </div>


            <Grid container>
                <Grid item xs={0} sm={2}></Grid>
                <Grid container item xs={0} sm={8}>
                    <Hidden xsDown >
                        <Grid item xs={0} sm={2} ></Grid>
                        <Grid container justify='center' item xs={0} sm={3} >product name</Grid>
                        <Grid container justify='center' item xs={0} sm={2} >Unit price</Grid>
                        <Grid container justify='center' item xs={0} sm={2} >Stock status</Grid>
                        <Grid item xs={0} sm={3} ></Grid>
                    </Hidden>
                </Grid>
                
                <Grid item xs={0} sm={2}></Grid>
            </Grid>


            <Grid container>
                <Grid item xs={0} sm={2}></Grid>
                <Grid item xs={12} sm={8}>
                    <Divider />
                    <ProductWishList />
                    <Divider />
                    <ProductWishList />
                    <Divider />

                </Grid>
                <Grid item xs={0} sm={2}></Grid>
            </Grid>

            {/* <PeopleOftenBuy/> */}




        </div>
    )
}

export default WishlistPage
