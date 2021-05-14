import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Frequentlypeoplebuyitem from './FrequentlyPeopleBuyItem';
const useStyles = makeStyles((theme) => ({
    root: {
  width:'100%',
  height:'300px',
  
 display:'flex',
 justifyContent:'center'
    },
    root2:{
       maxWidth:' 600px',
        height:'100%',
        border:'1px solid rgb(235, 236, 240)',
        display:'flex'
    }
     ,
     plus:{
         width:'20px',
         height:'100%',
     
         display:'flex',
         justifyContent:'center',
         alignItems:'center',
     },
     buyitall:{
         width:'100%',
         height:'40px',
         
         display:'flex',
         justifyContent:'center',
         marginTop:'20px',
         '& button':{
            border:'2px solid rgb(56, 102, 223);',
            width:'45%',
            color:'rgb(56, 102, 223)',
            fontWeight:'bold',
            borderRadius:'4px'
         }
     }
  }));
const Frequentlypeoplebuy = () => {
    const classes = useStyles();
    return (
        <div>
 <div className={classes.root}>
         <div className={classes.root2}>
         <Frequentlypeoplebuyitem image={'https://z.nooncdn.com/products/tr:n-t_80/v1605814591/N40633051A_1.jpg'} shippingcompany_pitcure={'https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg'}/>
         <div className={classes.plus}>
         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="plus"><g clip-path="url(#clip0)"><path d="M18.9999 9H11.0001V0.999939C11.0001 0.448059 10.552 0 9.99994 0C9.44806 0 9 0.448059 9 0.999939V9H0.999939C0.448059 9 0 9.44806 0 9.99994C0 10.552 0.448059 11.0001 0.999939 11.0001H9V18.9999C9 19.552 9.44806 20.0001 9.99994 20.0001C10.552 20.0001 11.0001 19.552 11.0001 18.9999V11.0001H18.9999C19.552 11.0001 20.0001 10.552 20.0001 9.99994C20.0001 9.44806 19.552 9 18.9999 9V9Z" fill="black"></path></g><defs><clipPath id="clip0"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
         </div>
         <Frequentlypeoplebuyitem image={'https://z.nooncdn.com/products/tr:n-t_80/v1600603866/N40633053A_1.jpg'} shippingcompany_pitcure={'https://z.nooncdn.com/s/app/com/noon/images/marketplace-en.png'} />
         <div className={classes.plus}>
         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="plus"><g clip-path="url(#clip0)"><path d="M18.9999 9H11.0001V0.999939C11.0001 0.448059 10.552 0 9.99994 0C9.44806 0 9 0.448059 9 0.999939V9H0.999939C0.448059 9 0 9.44806 0 9.99994C0 10.552 0.448059 11.0001 0.999939 11.0001H9V18.9999C9 19.552 9.44806 20.0001 9.99994 20.0001C10.552 20.0001 11.0001 19.552 11.0001 18.9999V11.0001H18.9999C19.552 11.0001 20.0001 10.552 20.0001 9.99994C20.0001 9.44806 19.552 9 18.9999 9V9Z" fill="black"></path></g><defs><clipPath id="clip0"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
         </div>
         <Frequentlypeoplebuyitem image={'https://z.nooncdn.com/products/tr:n-t_80/v1600603866/N40633053A_1.jpg'} shippingcompany_pitcure={'https://z.nooncdn.com/s/app/com/noon/images/marketplace-en.png'} />
       
       
        </div>
        
        </div>
<div className={classes.buyitall}>
    <button>Buy it Togeter for 400.00 SAR</button>
</div>

        </div>
       
    )
}

export default Frequentlypeoplebuy
