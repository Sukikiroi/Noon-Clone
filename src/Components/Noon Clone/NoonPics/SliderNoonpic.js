import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Sliderpic from './SliderNoonPic.PNG'
const useStyles = makeStyles((theme) => ({
    root_div:{
        width:'100%',
        margin:'auto',
     

    }
  }));
  
const Slidernoonpic = () => {
    const classes = useStyles();
    return (
        <div className={classes.root_div}>
            <img src={Sliderpic} alt="Logo" /> 
        </div>
    )
}

export default Slidernoonpic
