import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    root:{
        width:'80%',
        height:'100%',
        border:'1px solid rgb(226, 229, 241);',
    },
    title:{
        width:'100%',
        height:'30px',
        color:'#404553',
       
        '& h3':{
            fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.1px',
    marginBottom: '12px',
    marginTop:'12px',
    marginLeft:'12px',
    color:'#404553',
        }
    },
    price:{
        width:'100%',
        height:'30px',
       
        padding:'0px 10px 0px 10px',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        '& h3':{
            fontSize:'100%',
            color:'#404553',
            fontFamily:'Proxima Nova,Helvetica Neue,Arial,sans-serif',
            lineHeight: '1.3',
        },
            '& span':{
color:'dodgerblue'
            }
    },
    shipping:{
        width:'100%',
        height:'30px',
    
        padding:'0px 10px 0px 10px',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        '& h3':{
            fontSize:'100%',
            color:'#404553',
            fontFamily:'Proxima Nova,Helvetica Neue,Arial,sans-serif',
            lineHeight: '1.3',
        },
            '& span':{
color:'dodgerblue'
            }
     
    }
}));
const Ordersumry = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
           <div className={classes.title}>
               <h3>ORDER SUMMARY</h3>
           </div>
           <div className={classes.price}>
<h3>Subtotal</h3>
<h3>AED 389.00</h3>
           </div>
           <div className={classes.shipping}>
<h3>Shipping Fee</h3>
<span>Free</span>
           </div>
        </div>
    )
}

export default Ordersumry
