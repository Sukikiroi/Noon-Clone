import { Button, Grid, Typography, Checkbox } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import ProductPeopleOftenBuy from './ProductPeopleOftenBuy'
import productPeopleOftenbuy from './peopleOftenBuy.json'

const PeopleOftenBuy = () => {
    const [productPplOftenbuy, setproductPplOftenbuy] = useState(productPeopleOftenbuy)
    const handleproductInTheDeal = (id) => {
        setproductPplOftenbuy(productPplOftenbuy.map(e => e.id === id ? { ...e, isSelected: !e.isSelected } : e))
    }
    return (
        <div>
            <Typography style={{position:'relative',left:'20px'}}>People often buy :</Typography>
            <Grid container >
                <Grid container item xs={12} sm={9} >

                    <Grid item xs={12} sm={3}>
                        <ProductPeopleOftenBuy handleproductInTheDeal={handleproductInTheDeal} product={productPplOftenbuy[0]} />
                    </Grid>
                    <Grid container alignItems='center' justify='center' item xs={12} sm={1}><Typography align='center' >+</Typography></Grid>
                    <Grid item xs={12} sm={3}>
                        <ProductPeopleOftenBuy handleproductInTheDeal={handleproductInTheDeal} product={productPplOftenbuy[1]} />
                    </Grid>
                    <Grid container alignItems='center' justify='center' item xs={12} sm={1}><Typography align='center' >+</Typography></Grid>
                    <Grid item xs={12} sm={3}>
                        <ProductPeopleOftenBuy handleproductInTheDeal={handleproductInTheDeal} product={productPplOftenbuy[2]} />
                    </Grid>

                </Grid>

                <Grid container direction='column' justify='center' item xs={12} sm={3}>
                    <Typography align='center' >Total price: $22.00</Typography>
                    <button className='cartempty__button' >Take the deal</button>
                </Grid>
            </Grid>
        </div>
    )
}

export default PeopleOftenBuy
