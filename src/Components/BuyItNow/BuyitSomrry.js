import React,{useContext,useState,useEffect} from 'react'
import { Badge, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import Productincheckout from './Productincheckout'
import { CartContext } from "../Cart Shopping/contexts/CartContext";
import PerfectScrollbar from 'react-perfect-scrollbar'
const useStyles = makeStyles(() => ({
    root: {
        
        paddingTop: '60px',
    },
    single_row: {
        margin:'10px 0'
    },   
}));


const BuyitSomrry = () => {
    const {
        cartItems,CountItem,
        itemCount,
       wished,wishlist,total
      } = useContext(CartContext);
      const [Buy, setBuy] = useState()
      useEffect(() => {
        // this is only executed once
        
        let Buyit =       JSON.parse(localStorage.getItem('Buyit'));
  
        console.log(Buyit)
          
      }, [])
  
    const classes = useStyles()
    return (
        <Grid container direction='column' className={classes.root} alignItems='stretch'>
         
          
         {/* {
         Buy.map((Buyit) => (
         <Productincheckout productpictur={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCe2smrpsy30VpprZTaW2ka3X4bKtG22NBMg&usqp=CAU'} price={50} qt={12}/>
         ))
         }  */}
            <Divider />

            <Grid className={classes.single_row} item container justify='space-between' alignItems='center'>   
                <Typography variant='h6' >Subtotal</Typography>
                <Typography variant='h6' >${total}</Typography>
            </Grid>

            <Grid className={classes.single_row} item container justify='space-between' alignItems='center'>   
                <Typography variant='h6' >Shipping</Typography>
                <Typography variant='h6' >$5</Typography>
            </Grid>

            <Divider/>
            {(parseInt(total)!=0 &&  <Grid className={classes.single_row} item container justify='space-between' alignItems='center'>   
                <Typography variant='h6' ><span> Total</span></Typography>
                <Typography variant='h6'> <span>usd</span> ${parseInt(total)+5}</Typography>
            </Grid>) || "Cart Is Empty"}
           

        </Grid>
    )
}

export default BuyitSomrry
