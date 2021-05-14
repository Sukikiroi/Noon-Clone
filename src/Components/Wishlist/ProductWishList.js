import { Grid, Typography, Button, Divider, IconButton } from '@material-ui/core'
import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const ProductWishList = ({  productpictur,productdescription,id,product,price,discount }) => {
    return (
        <Grid container style={{ margin: '10px 0' }}>
            <Grid container direction='column' justify='center' alignItems='center' item xs={12} sm={2}>
                <IconButton>
                    <DeleteForeverIcon style={{ color: 'grey', fontSize: '30px' }} />
                </IconButton>
                <img style={{ width: '90%', margin: '0', objectFit: 'contain' }} src={productpictur} alt='img' />
            </Grid>

            <Grid container direction='column' justify='center' item xs={12} sm={3}>
                <Typography align='center' variant='subtitle2' >classy shirt</Typography>
            </Grid>

            <Grid container direction='column' justify='center' item xs={12} sm={2}>
                <Typography align='center' variant='subtitle2' >$16.00</Typography>
            </Grid>

            <Grid container direction='column' justify='center' item xs={12} sm={2}>
                <Typography align='center' variant='subtitle2' >In stock</Typography>
            </Grid>

            <Grid container direction='column' justify='center' item xs={12} sm={3}>
                <Typography align='center' variant='subtitle2' >Added on : December 5,2020</Typography>
                <Button variant='contained' color='primary' >Add to cart</Button>
            </Grid>
        </Grid>
    )
}

export default ProductWishList
