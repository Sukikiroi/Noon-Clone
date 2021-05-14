import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    root:{
        width:'100%',
        margin:'auto',
     marginBottom:'40px',
        display:'flex',
        justifyContent:'center'
    },
    picture:{
        width:'90%',
       margin:'auto',
       
    }
}));
const Sectionwithpic = ({Picture_section}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.picture}>
            <img src= {Picture_section} alt="Logo" />
            </div>
        </div>
    )
}

export default Sectionwithpic
