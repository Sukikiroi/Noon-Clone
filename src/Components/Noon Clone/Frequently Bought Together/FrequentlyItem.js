import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root:{
        width:'150px',
        height:'90%',
      
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        marginLeft:'2px',
        padding: '12px 6px',
        cursor: 'pointer',
    },
    img:{
        width:'90%',
        height:'70%',
       
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    } ,
    checkbox:{
        position:'relative',
        bottom:'50px',
      right:'10px'
    },
    title:{
        width:'100%',
        height:'50px',
        lineHeight: '1.5em',
        overflow: 'hidden',
    },
    price:{
        width:'100%',
        height:'50px',
        
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color:'rgb(64, 69, 83)',
        fontWeight:'bold',
        fontSize:'100%'
    },
    shipping_company:{
        width:'100%',
        height:'30px',
        marginTop:'10px',
        '& img':{
            height:'18px'
        }
    }
    
}));
const Frequentlyitem = ({Frequently_pictur,shipping_company_pictur}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <div className={classes.img}>
              <div className={classes.checkbox}>
              <img src="https://z.nooncdn.com/s/app/com/noon/icons/checkbox-square_checked_v2.svg" alt="https://z.nooncdn.com/s/app/com/noon/icons/checkbox-square_checked_v2.svg"/>
              </div>
          <img src={Frequently_pictur} alt="Logo" />
          </div>
       <div className={classes.price}>SAR 777.00

</div>
       <div className={classes.title}>
       Watch Series 3-42mm GPS Space Gray Aluminum Case with Sport Band Black
       </div>
       <div className={classes.shipping_company}>
       <img src={shipping_company_pictur} alt="Logo" />
       </div>
        </div>
    )
}

export default Frequentlyitem
