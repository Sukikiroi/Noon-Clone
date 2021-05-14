import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Leftsidecheckoutinformation from './Checkoutinformation/Leftsidecheckoutinformation';
import Rightsidecheckoutinformation from './Checkoutinformation/Rightsidecheckoutinformation';
const useStyles = makeStyles((theme) => ({
    container_Information:{
        border:' 1px solid rgb(226, 229, 241)',
backgroundColor: 'rgb(255, 255, 255)',
width:'100%',
margin:'auto',
    } ,
    left:{
        width:'100%',
        height:'100%',
        
    },
    right:{
        width:'100%',
        height:'100%',
       
    }
}));
const Checkoutinformation = () => {
    const classes = useStyles();
    let result=6;
    result =result+1  
    return (
        <div className={classes.container_Information}>
         <Grid container  >
        <Grid item xs={12} lg={6}>
            <div className={classes.left}>
                <Leftsidecheckoutinformation/>
            </div>
 
        </Grid>
        <Grid item xs={12} lg={6}>
        <div className={classes.right}>
            <Rightsidecheckoutinformation/>
        </div>
        </Grid>
        </Grid>
        </div>
    )
}

export default Checkoutinformation
