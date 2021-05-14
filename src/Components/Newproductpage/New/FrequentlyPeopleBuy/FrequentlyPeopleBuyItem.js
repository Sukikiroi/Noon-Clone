import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
const useStyles = makeStyles((theme) => ({
  root:{
   width:'160px'   ,
   height:'100%',
   
   marginLeft:'20px',
   display:'block'
  },
  Img:{
width:'100%',
height:'100px',
 
display:'flex',
justifyContent:'center',


  },
  checkbox:{
    position:'relative',
    bottom:'35px',
    right:'110px'
}
  ,
  price:{
   width:'100%',
   height:'40px',
 
   display:'flex',
   padding:'0px 40px 0px 40px',
   justifyContent:'space-between',
 '& h2':{
     color:'#696969',
     fontWeight:'bold'
 }
  }  
   ,
   title:{
    width:'100%',
    height:'40px',
 
    display:'flex',
    justifyContent:'center',
    textAlign:'center',
    marginBottom:'15px'
   }  ,
   shippingcompany:{
    width:'100%',
    height:'40px',
    
    display:'flex',
    justifyContent:'center',
    '& img':{
        height:'20px'
    },

   }
  }));
const Frequentlypeoplebuyitem = ({image,shippingcompany_pitcure}) => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  
    return (
        <div className={classes.root}>
          <div className={classes.Img}>
          <img src={image} alt="Logo" /> 
          <Checkbox className={classes.checkbox}
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
        </div>
        <div className={classes.price}>
            <h2>SAR</h2>   <h2>450.0</h2>
        </div>
        <div className={classes.title}>
            <h2>PULSE 3D Wireless Headset</h2>
        </div>
        <div className={classes.shippingcompany}>
        <img src={shippingcompany_pitcure} alt="Logo" /> 
        </div>
        </div>
    )
}

export default Frequentlypeoplebuyitem
