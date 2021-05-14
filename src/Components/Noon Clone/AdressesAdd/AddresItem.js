import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import HomeIcon from '@material-ui/icons/Home';
const useStyles = makeStyles((theme) => ({
    root:{
        width:'300px',
        height:'200px',
        border:'1px solid rgb(56, 102, 223)',
        padding:' 13px 15px 16px',
       
        boxShadow: ' rgb(56, 102, 223) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 3px 2px 0px',
        borderRadius: '2px',
        margin:'10px',
        flex:' 1 1 0%',
       
    },
    top:{
        width:'250px',
        height:'20%',
 
        display:'flex',
        justifyContent:'space-between',
        alignContent:'center',
        '& h2':{
            color:'#404553',
            fontFamily:' Proxima Nova, sans-serif',
            fontSize:'14px',
            fontWeight:'bold',
          
        },
        '& div':{
            display:'flex',
            justifyContent:'center',
            alignContent:'center',
            lineHeight:'2'
        },
        
    },
    bottom:{
        width:'250px',
        height:'80%',
        display:'flex',
        flexDirection:'column'
    },
    bottom_Name:{
        width:'250px',
        height:'25%',
      
        display:'flex',
        justifyContent:'space-between',
        '& h2':{
            color:'rgb(126, 133, 155)'
        },
        '& h1':{
            fontWeight: '500',
fontSize: "1.16666rem",
whiteSpace: 'nowrap',
        }
        
    }
    ,
    bottom_address:{
        width:'250px',
        height:'50%',
      
        display:'flex',
  justifyContent:'space-between',
        '& h2':{
            color:'rgb(126, 133, 155)'
        },
        '& h3':{
            marginLeft:'10px'
        }
    }
    ,
    bottom_phone:{
        width:'250px',
        height:'25%',
        display:'flex',
        justifyContent:'space-between',
        '& h2':{
            color:'rgb(126, 133, 155)'
        }
    }
}));
const Addresitem = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.top}>
                <div>
                <h2>Home</h2>
               <HomeIcon/>
                </div>
<MoreHorizIcon/>
            </div>
            <div className={classes.bottom}>
<div  className={classes.bottom_Name}>
    
<h2>Name</h2>
<h1>Kaddour Abdelaziz</h1>
</div>
<div  className={classes.bottom_address}>
<h2>Address</h2>
<h3>annaba PJ7P+2H - Al Raed - Ar-Riyad - Riyadh Province - 11564 Riyadh Saudi Arabia </h3>
</div>
<div  className={classes.bottom_phone}>
<h2>Phone Number</h2>
 
</div>
            </div>
        </div>
    )
}

export default Addresitem
