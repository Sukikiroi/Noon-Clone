import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Cartitemformobile from './CartItemForMobile';
const useStyles = makeStyles((theme) => ({
    root: {
      width:'100%',
      margin:'auto',
   
      backgroundColor:'Azure',
      display:'block'
    },
    item_count:{
        width:'100%',
        margin:'auto',
 
    },
    cart_image:{
        width:'100%',
        margin:'auto',
         
    }
  }));
const Cartcontainerformobile = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
         <div className={classes.item_count}>Cart (6 Items)</div>   
         <div className={classes.cart_image}>
         <img src= 'https://k.nooncdn.com/cms/pages/20210419/e4c2c46c7f45fe2956dfaa68c3623439/en_strip-nonVIP-00-KSA.gif' alt="Logo" />

         </div>
         <div className={classes.cart_Items}>
             <Cartitemformobile CartItem_Image={'https://z.nooncdn.com/products/tr:n-t_120/v1540820670/N12012022A_1.jpg'}/>
             <Cartitemformobile CartItem_Image={'https://z.nooncdn.com/products/tr:n-t_240/v1605898679/N40559284A_1.jpg'}/>
             <Cartitemformobile CartItem_Image={'https://z.nooncdn.com/products/tr:n-t_240/v1606212269/N42587741A_1.jpg'}/>
             <Cartitemformobile CartItem_Image={'https://z.nooncdn.com/products/tr:n-t_240/v1614266194/N38581298A_1.jpg'}/>
             <Cartitemformobile CartItem_Image={'https://z.nooncdn.com/products/tr:n-t_240/v1605794333/N11031445A_1.jpg'}/>
         </div>
        </div>
    )
}

export default Cartcontainerformobile
