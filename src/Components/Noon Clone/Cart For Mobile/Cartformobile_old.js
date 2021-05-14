import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {   Button } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const useStyles = makeStyles((theme) => ({
    root:{
        width:'100%',
        height:'140px',
        marginBottom:'10px',
        backgroundColor:'white',
        display:'flex',
        justifyContent:'center',
        
    },
    cart_item:{
        width:'90%',
        height:'100%', 
        display:'flex',
        
    },
    cart_item_info:{
        width:'70%',
        height:'90%',
        
     
    },
    cart_item_img:{
        width:'30%',
        height:'80%',
         
        '& img':{
            maxWidth:'100%',
            maxHeight:'100%'
        }
    },
    cart_item_title:{
        width:'100%',
      margin:'auto ', 
      '& h1' :{
          fontSize:'12px'
      }
    },
    cart_item_price:{
        width:'100%',
        margin:'auto ', 
        marginTop:'10px' ,
      
        display:'flex',
        justifyContent:'flex-start',
        '& h1':{
            fontSize:'18px',
            fontWeight:'bold'
        },
        '& span':{
            marginRight:'5px',
            fontWeight:'bold'
        }
    },
    cart_item_delevry_time:{
        width:'100%',
        margin:'auto ',
        marginTop:'5px' ,
        '& h1':{
        color:'grey'
        }
    },
    cart_item_option_delevry:{
        width:'100%',
        margin:'auto ',
   
        display:'flex',
        justifyContent:'flex-start',
        '& h1':{
            color:'green',
            fontSize:'12px',
        },
        '& span':{
            marginRight:'5px',
            fontWeight:'bold',
            fontSize:'12px',
        }
    },
    cart_item_remove_button:{
        width:'130%',
        margin:'auto ',
        
        display:'flex',
        justifyContent:'flex-end',
        '& Button':{
            textTransform :'capitalize'
        }
         
    }
}));
const Cartitemformobile = ({CartItem_Image}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <div className={classes.cart_item}>
<div    className={classes.cart_item_info}>
<div    className={classes.cart_item_title}>
<h1> iPhone 11 Pro With FaceTime Midnight Green 256GB 4G LTE - International Specs</h1>
</div>
<div    className={classes.cart_item_price}>
   <span>AED</span>   <h1>2277.00</h1></div>
    <div    className={classes.cart_item_delevry_time}>
    <h1>Order in 6 hrs 28 mins</h1>

</div>
<div   className={classes.cart_item_option_delevry}>
 <span>Free delivery by</span> <h1> Tomorrow, May 1</h1>
</div>


<div     className={classes.cart_item_remove_button}>
 
<Button     startIcon={<DeleteOutlineIcon />} >Remove</Button>

</div>


</div>

<div    className={classes.cart_item_img}>
<img src= {CartItem_Image} alt="Logo" />
</div>

          </div>
        </div>
    )
}

export default Cartitemformobile
