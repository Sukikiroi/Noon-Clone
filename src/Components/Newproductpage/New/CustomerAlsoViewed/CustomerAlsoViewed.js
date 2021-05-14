import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Customeralsoviewed_image from './CustomerAlsoviewed.PNG'
const useStyles = makeStyles((theme) => ({
    root:{
        width:'100%',
        margin:'auto'
    }
}));
const Customeralsoviewed = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
                <img src={Customeralsoviewed_image} alt="Logo" /> 
        </div>
    )
}

export default Customeralsoviewed
