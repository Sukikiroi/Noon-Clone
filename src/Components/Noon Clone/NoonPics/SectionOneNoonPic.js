import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
 
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
            <img src= 'https://k.nooncdn.com/cms/pages/20210513/e7b382b79238c01e7ea96965f04b6da8/en_PLP-01-KSA.png' alt="Logo" />;
        </div>
    )
}

export default Slidernoonpic
