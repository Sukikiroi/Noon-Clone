import { Button, Divider, TextField, Grid, Paper } from '@material-ui/core'
import React from 'react'
import ProductCheckout from '../productcheckout/ProductCheckout'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './checkout.css'
import { useHistory } from "react-router-dom";

const Checkout = () => {

    const history = useHistory();
    function handleClick__go_to_checkout() {
        history.push("/checkout");
    }

    function handleClick__go_to_Store() {
        history.push("/");
    }
    return (
    
        <>
            <Grid container >
                <Grid item xs={0} md={2} />
                <Grid item xs={12} md={8} >
                    <Grid container justify='space-between' alignItems='center' className='checkout__header' >
                        <Grid item xs={12} sm={6}  >
                            <h2 className='checkout__header__title'>Your cart ( 10 item )</h2>
                        </Grid>
                        <Grid container justify='flex-end' item xs={12} sm={6}>
                            <button onClick={handleClick__go_to_checkout} className='checkout__header__button'>Checkout</button>
                        </Grid>
                    </Grid>
                    <Divider />

                    {/* <Grid container >
                        <Grid item xs={12} sm={3} >
                            a
                        </Grid>
                        <Grid item xs={12} sm={3} >
                            a
                        </Grid>
                        <Grid item xs={12} sm={3} >
                            a
                        </Grid>
                        <Grid item xs={12} sm={3} >
                            a
                        </Grid>
                    </Grid> */}
                    <ProductCheckout />
                    <ProductCheckout />
                    <ProductCheckout />
                    <ProductCheckout />
                    
                    <div className='checkout__msg'>
                        <p  >
                            This shop uses currency conversion. Your order will be processed in USD ($), even if the currently displayed prices state otherwise.
                        </p>
                    </div>
                    
                    <Divider />
                    <Grid container direction='row' alignItems='flex-start' >
                        <Grid container justify='center' item xs={12} sm={3} >
                            <Button startIcon={<ArrowBackIcon />} onClick={handleClick__go_to_Store}>
                                CONTINUE SHOPPING
                            </Button>
                        </Grid>
                        <Grid container justify='center' item xs={12} sm={6} >
                            <TextField
                                id="outlined-multiline-static"
                                label="Additional notes"
                                multiline
                                rows={4}
                                fullWidth
                                size='small'
                                variant="outlined"
                                placeholder='Add any Additional notes'
                            />
                        </Grid>
                        <Grid container justify='center' item xs={12} sm={3} >
                            <div className='checkout__footer__total' >
                                <h4>Total : $300.00</h4>
                                <h4>Savings: <span className='checkout__footer__total__saved' >-$100.00</span></h4>
                                <Divider />
                                <h3>GRAND TOTAL: $200.00</h3>
                                <button onClick={handleClick__go_to_checkout} className='checkout__header__button checkout__footer__button__total'>Checkout</button>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={0} md={2} />


            </Grid>

        </>
    )
}

export default Checkout