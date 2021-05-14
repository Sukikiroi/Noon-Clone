import React, { useState,useContext } from 'react'
import './productcheckout.css'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { Button, Checkbox, FormControlLabel, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import { CartContext } from "../../Cart Shopping/contexts/CartContext";

const ProductCheckout = ({price,producttitle,productpictur,productdescription,product}) => {
    
    const {
        addNote,increase
      } = useContext(CartContext);
    

    const [show_for_apply_coupon, setShow_for_apply_coupon] = useState(false)
    const [Note, setNote] = useState('')
    const [inputValue, setInputValue] = React.useState("");
    const handleChange = (e)=> {
        setNote(e.target.value)
      }
    return (
   

        <Grid container direction='column' >
            <Grid container item justify='space-between' alignItems='center' >
                <Typography>{producttitle}</Typography>
                <a href='' >contact shop</a>
            </Grid>

            {/* the whole row of product */}

            <Grid direction='row' container item>

                {/* Image */}

                <Grid container item xs={12} md={4} >
                    <img style={{width:'100%',objectFit:'contain',margin:'10px',borderRadius:'15px'}} src={productpictur} />
                </Grid>

                {/* description + (price & qty) */}

                <Grid container item xs={12} md={8}>
                    {/* description */}
                    <Grid container direction='column' justify='space-between' item xs={12} md={6} >
                        <Typography style={{margin:'10px'}} >
                            {productdescription}                           
                        </Typography>

                        <Grid container justify='space-between'>
                            <button className='productcheckout__button' >Save for later</button>
                            <button className='productcheckout__button' >remove</button>
                        </Grid>

                    </Grid>

                    {/* price + qty */}

                    <Grid style={{ textAlign: 'right' }} item xs={12} md={6}>
                        <Typography>USD {price}</Typography>
                        <TextField value='1' select variant='outlined' />
                        <Typography>Only 8 available and it's in 2 people's carts</Typography>
                    </Grid>

                </Grid>

            </Grid>

            {/* gift part and apply coupon */}

            <Grid container justify='space-between' alignItems='flex-start'>

                <Grid item xs={12} md={6} >
                    <FormControlLabel
                        control={<Checkbox color='primary' />}
                        label="This order is a gift"
                    />
                </Grid>

                <Grid item xs={0} md={1}></Grid>

                <Grid style={{ textAlign: 'right' }} item xs={12} md={5} >
                    <button className='productcheckout__button'>
                        <span className='productcheckout__button__coupon' onClick={() => setShow_for_apply_coupon(!show_for_apply_coupon)} > <span><svg style={{width:'20px',margin:'0 10px 0 0'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M11,22a1,1,0,0,1-.707-0.293l-8-8a1,1,0,0,1,0-1.414l10-10A1,1,0,0,1,13,2h8a1,1,0,0,1,1,1v8a1,1,0,0,1-.293.707l-10,10A1,1,0,0,1,11,22ZM4.414,13L11,19.586l9-9V4H13.414Z"></path><circle cx="16" cy="8" r="2"></circle></svg></span> Apply shop coupon codes</span>
                    </button>
                    {show_for_apply_coupon && <div className='productcheckout__coupon' >
                        <input placeholder='Enter coupon code' />
                        <button>Apply</button>
                    </div>}
                </Grid>
            </Grid>

            {/* add note and shipping method */}


            <Grid container justify='space-between' >
                <Grid item xs={12} md={6} >
                    <TextField   onChange={ handleChange} multiline rows='4' fullWidth placeholder='Add a note to this shop' variant="outlined" />
                    <Button onClick={() => addNote(product,Note)}> Add Note</Button>
                </Grid>
                <Grid item xs={0} md={1}></Grid>
                <Grid item xs={12} md={5}>
                    <TextField select fullWidth placeholder='shipping method' variant="outlined" />
                    <Typography style={{ textAlign: 'right' }}>
                        Estumated dilevery on : 19 jan 2021
                    </Typography>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default ProductCheckout



// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       margin: 'auto',
//       maxWidth: 500,
//     },
//     image: {
//       width: 128,
//       height: 128,
//     },
//     img: {
//       margin: 'auto',
//       display: 'block',
//       maxWidth: '100%',
//       maxHeight: '100%',
//     },
//   }));

// const ProductCheckout = () => {
//     const [product, setproduct] = useState({ imagesrc: '//cdn.shopify.com/s/files/1/0356/4008/2491/products/product-image-1017689827_medium.jpg?v=1586282477', name: '20" Dog Folding Cage', qt: 1, priceold: 150, pricenew: 100 })

//     const handleincrement = (qt) => {
//         setproduct({ ...product, qt: qt + 1 })
//     }
//     const handledecrement = (qt) => {
//         setproduct({ ...product, qt: qt - 1 })
//     }
//     return (
//         <Grid container direction='row' justify='space-between' className='Productcheckout' >

//             <Grid container className='Productcheckout__product' >

//                 <img className='Productcheckout__image' src={product.imagesrc} />

//                 <div>
//                     <h2> {product.name} </h2>
//                 </div>

//             </Grid>

//             <Grid container >

//                 <div className='Productcheckout__prices' >
//                     <p className='Productcheckout__prices__new'>${product.pricenew}</p>
//                     <p className='Productcheckout__prices__old'>${product.priceold}</p>
//                 </div>

//                 <div className='Productcheckout__buttons' >
//                     <Button onClick={() => handleincrement(product.qt)} className='Productcheckout__addbuttons' >+</Button>
//                     <p className='Productcheckout__qyt'> {product.qt} </p>
//                     <Button disabled={product.qt === 0} onClick={() => handledecrement(product.qt)} className='Productcheckout__minusbuttons'>-</Button>
//                 </div>

//                 <div className='Productcheckout__prices' >
//                     <p className='Productcheckout__prices__new'>${product.pricenew * product.qt}</p>
//                     <p className='Productcheckout__prices__old'>${product.priceold * product.qt}</p>
//                 </div>

//                 <IconButton>
//                     <DeleteIcon style={{ fill: 'black' }} />
//                 </IconButton>

//             </Grid>





//         </Grid>
//     )
// }

// export default ProductCheckout
