import React ,{useState}from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CheckoutInformation from './CheckoutInformation'
import Button from "@material-ui/core/Button";
import CheckoutPayment from './CheckoutPayment'
import Adressesaddcontainer from '../AdressesAdd/AdressesAddContainer';
const useStyles = makeStyles((theme) => ({
    root:{
        width:'100%',
    margin:'auto',
        marginTop:'60px',
        display:'flex',
        justifyContent:'center'
    },
    container:{
        width:'90%',
        height:'400px',
        backgroundColor:'	hsl(149, 100%, 100%)',
        display:'flex',
        justifyContent:'center'
    },
    suivant_button_root:{
        border:'1px solid black',
        width:'100%',
        display:'flex',
        justifyContent:'center'
      },
      suivant_button:{
        border:'1px solid black',
        width:'80%',
        display:'flex',
        justifyContent:'flex-end'
      }
}));
const Checkoutcontainer = ({steps_value}) => {
    const classes = useStyles();
    const [step, setstep] = useState(steps_value)
    console.log(steps_value)
    return (
        <div className={classes.root}>
    <div className={classes.container}>
 {/* <Adressesaddcontainer/> */}

          {(
               steps_value>0

            &&
            <CheckoutPayment/> 
            )

             ||
          
       
            <CheckoutInformation/>
              }  
        </div>

        </div>
    )
}

export default Checkoutcontainer
