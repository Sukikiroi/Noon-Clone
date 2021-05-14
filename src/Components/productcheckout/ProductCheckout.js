import React, { useState } from 'react'
import './productcheckout.css'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { Button, Grid, makeStyles } from '@material-ui/core';


const ProductCheckout = () => {
    const [product, setproduct] = useState({ imagesrc: '//cdn.shopify.com/s/files/1/0356/4008/2491/products/product-image-1017689827_medium.jpg?v=1586282477', name: '20" Dog Folding Cage', qt: 1, priceold: 150, pricenew: 100 })

    const handleincrement = (qt) => {
        setproduct({ ...product, qt: qt + 1 })
    }
    const handledecrement = (qt) => {
        setproduct({ ...product, qt: qt - 1 })
    }
    return (
        <Grid container alignItems='center' className='Productcheckout' >

            <Grid container alignItems='center' item xs={12} sm={6} className='' >
                <Grid container justify='center' item xs={12} sm={2}>
                    <img className='Productcheckout__image' src={product.imagesrc} />
                </Grid>
                <Grid container justify='center' item xs={12} sm={10}>
                    <div>
                        <h2> {product.name} </h2>
                    </div>
                </Grid>
            </Grid>

            <Grid container item xs={12} sm={2} className='Productcheckout__prices' >

                <Grid item xs={12} sm={6}>
                    <p className='Productcheckout__prices__new'>${product.pricenew}</p>
                    <p className='Productcheckout__prices__old'>${product.priceold}</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <p className='Productcheckout__prices__new'>${product.pricenew * product.qt}</p>
                    <p className='Productcheckout__prices__old'>${product.priceold * product.qt}</p>
                </Grid>

            </Grid>

            <Grid container direction='row' justify='space-between' alignItems='center' item xs={12} sm={3} className='Productcheckout__buttons' >
                {/* <Grid item xs={12}  > */}
                    <Button onClick={() => handleincrement(product.qt)} className='' >+</Button>
                    <p className=''> {product.qt} </p>
                    <Button disabled={product.qt === 0} onClick={() => handledecrement(product.qt)} className=''>-</Button>
                {/* </Grid> */}
            </Grid>

            <Grid container justify='center' item xs={12} sm={1}>
                <IconButton>
                    <DeleteIcon style={{ fill: 'black' }} />
                </IconButton>
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
