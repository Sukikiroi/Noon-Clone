import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Productpage from './ProductPage'
import Container from "@material-ui/core/Container";
const useStyles = makeStyles((theme) => ({
    paper:{
        backgroundColor:'black',
        width:'100%',
        height:'100px',
        position:'fixed',
         

    },
    buyit:{
        [theme.breakpoints.down('sm')]: {
            width:'100%',
            height:'40px',
 display:'flex',
 justifyContent:'center',
            position:'fixed',
            bottom:'0',
     
            zIndex:'3',
            '& button':{
                width:'80%',
                height:'100%',
                backgroundColor:'dodgerblue',
                color:'white',
                borderRadius:'2px '
            }
          },
      
    }
}));

export default function Containerproductpage() {
  const classes = useStyles();

  return (
  
      
     <div>

 <br></br>
      <br></br>
      <br></br>
<Productpage/>
 {/* <div className={classes.buyit}>
 <select style={{height:'100%',width:'20%'}}>
  <option value="grapefruit">1</option>
  <option value="lime">2</option>
  <option selected value="coconut">3</option>
  <option value="mango">4</option>
</select>
     <button>Buy it now</button>
 </div> */}
     </div>
  
  );
}
