import { Typography } from '@material-ui/core'
import React from 'react'
import './productpploftenbuy.css'
import CheckBoxIcon from '@material-ui/icons/CheckBox';




const ProductPeopleOftenBuy = ({ product, handleproductInTheDeal }) => {
    return (
        <div className={product.isSelected ? 'productpploftenbuySelectedContainer' : 'productpploftenbuySelectedContainer__off'}>
            {product.isSelected && <> <div className="check-bg"  ></div> <CheckBoxIcon className='productpploftenbuySelectedIcon' />  </>}

            <div onClick={()=>handleproductInTheDeal(product.id)} className={product.isSelected ? 'productpploftenbuySelected' : 'productpploftenbuy'}  >

                <div className='productpploftenbuy__container'>

                    <div className='productpploftenbuy__images' >
                        <img src={product.imgSrc} alt='' className='productpploftenbuy__image1' />
                        <img src={product.imgSrc2} alt='' className='productpploftenbuy__image2' />
                    </div>
                    <Typography noWrap align='center' variant='h6' >
                        {product.titleProduct}
                    </Typography>

                    <Typography variant='body1' align='center' className='productpploftenbuy__price' >
                        ${product.priceOld}
                    </Typography>
                    <Typography variant='body1' align='center' className='productpploftenbuy__price' >
                        ${product.priceNew}
                    </Typography>

                    <span className='productpploftenbuy__discount' >
                        -{product.discount}% SALE
                </span>

                </div>

            </div>
        </div>
    )
}

export default ProductPeopleOftenBuy
