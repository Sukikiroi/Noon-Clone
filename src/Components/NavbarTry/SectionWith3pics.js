import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    root:{
        width:'100%',
        margin:'auto',
        marginBottom:'40px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    picture:{
        width:'30%',
       margin:'auto',
        
       
    }
}));
const SectionWith3pics = ({Picture_1,Picture_2,Picture_3}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.picture}>
            <img src= {Picture_1} alt="Logo" />
            </div>
            <div className={classes.picture}>
            <img src= {Picture_2} alt="Logo" />
            </div>
            <div className={classes.picture}>
            <img src= {Picture_3} alt="Logo" />
            </div>
        </div>
    )
}

export default SectionWith3pics
