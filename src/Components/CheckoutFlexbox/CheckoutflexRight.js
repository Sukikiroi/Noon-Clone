import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CreditCardInput from 'react-credit-card-input';
const useStyles = makeStyles((theme) => ({
    root: {
       width:'85%',
     
       border:'3px solid black',
       borderRadius:'5px',
       display:'block',
       width: "80%",
       
      margin: "0 auto",
        
    },
    center_root:{
        width:'100%',
      
        width: "100%",
       
        margin: "0 auto",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontFamily:"Georgia, serif",
    
    },
    total:{
        width:'100%',
        height:'60px',
        fontFamily:"Georgia, serif",
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        fontWeight:'bold',
        padding:'0px 10px 0px 10px',
        border:'3px solid black',
        borderBottomStyle:'solid',
        borderTopStyle:'none',
        borderRightStyle:'none',
        borderLeftStyle:'none',
    },
    product:{
        width:'100%',
        height:'100px',
        margin:'0 auto',
        fontFamily:"Georgia, serif"
    },
    paying:{
        display:'flex',
        width:'100%',
        height:'61px',
        margin:'0 auto',
        fontFamily:"Georgia, serif",
        
    },
    visa:{
        width:'33%',
        height:'60px',
        margin:'0 auto',
        fontFamily:"Georgia, serif",
        borderTopStyle:'solid',
       
    },
    paybal:{
        width:'33%',
        height:'60px',
        margin:'0 auto',
        fontFamily:"Georgia, serif",
        borderTopStyle:'solid', 
    },
    credit_form:{
        width:'100%',
        height:'100px',
        fontFamily:"Georgia, serif",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'AliceBlue'
       
    },
    button_order:{
        width:'100%',
        height:'60px',
      
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontFamily:"Georgia, serif"
        // padding:'0px 10px 0px 10px',
    },
    button:{
        backgroundColor:'black',
        color:'white',
        width:'50%',
        height:'70%',
        borderRadius:'5px',
        fontFamily:"Georgia, serif"
    },
    credit_input_form:{
        width:'100%',
        height:'40px',
        fontFamily:"Georgia, serif",
        display:'flex',
        justifyContent:'space-between'
    }
   
  }));
const Checkoutflexright = () => {
    const [selectedValue, setSelectedValue] = React.useState('cash');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
       
    };
    const classes = useStyles();
    return (
        <div    className={classes.center_root}>
         
        <div      className={classes.root}>



          <div      className={classes.total}>
        <h1>Product</h1>
        <h1>Subtotal(USD)</h1>
        </div>


        <div  className={classes.product}  >
 
        </div>
        <div      className={classes.total}>
        <h1>Subtotal</h1>
        <h1> (USD)</h1>
        </div>
        <div      className={classes.total}>
        <h1>Shipping</h1>
        <h1> (USD)</h1>
        </div>
        <div    className={classes.paying}>
<div   className={classes.visa} >
<FormControlLabel  checked={selectedValue === 'creditcard'}  style={{fontFamily:"Georgia, serif",whiteSpace:'nowrap'}} onChange={handleChange} value="creditcard" control={<><Radio color="black" /> <img style={{height:'60px'}} src= ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRPs09Wjr8mhwS1bWpWBRXyOaZ2WVX4pdggA&usqp=CAU' alt="Logo" /> </>}  />
</div>
<div   className={classes.paybal} >
<FormControlLabel checked={selectedValue === 'paybal'}  style={{fontFamily:"Georgia, serif",whiteSpace:'nowrap',}} onChange={handleChange} value="paybal" control={<><Radio color="black" /> <img style={{height:'60px'}} src= ' data:image/png;base64,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 ' alt="Logo" /> </>}   />
</div>
<div   className={classes.visa} >
<FormControlLabel checked={selectedValue === 'cash'} style={{fontFamily:"Georgia, serif",whiteSpace:'nowrap',float:'left'}} onChange={handleChange} value="cash" control={<><Radio color="black" /> <img style={{height:'60px'}} src= '  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdtRfZj9SH4d0vOEpyABX6n4WgYqppynhRw&usqp=CAU ' alt="Logo" /> </>}   />
</div>
      
      
        </div>



      <div className={classes.credit_form}>
      <CreditCardInput
  onError={({ inputName, err }) => console.log(`credit card input error: ${err}`)}
  cardCVCInputProps={{
    onBlur: e => console.log('cvc blur', e),
    onChange: e => console.log('cvc change', e),
    onError: err => console.log(`cvc error: ${err}`)
  }}
  cardExpiryInputProps={{
    onBlur: e => console.log('expiry blur', e),
    onChange: e => console.log('expiry change', e),
    onError: err => console.log(`expiry error: ${err}`)
  }}
  cardNumberInputProps={{
    onBlur: e => console.log('number blur', e),
    onChange: e => console.log('number change', e),
    onError: err => console.log(`number error: ${err}`)
  }}
/>
 
      </div>
     
     
     
     
     
     




      <div className={classes.button_order}>
          <button    className={classes.button}>Place Order</button>
      </div>
        </div>
        </div>
    )
}

export default Checkoutflexright
