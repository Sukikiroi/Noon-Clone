import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root_product:{
        width: '175.571px',
marginRight: '15px',
height: 'auto',
    },
    root_product2:{
        height: '100%',
    }
  }));
const Productnoon = () => {
    const classes = useStyles();
    return (
        <div    className={classes.root_product}>
          <div  className={classes.root_product2}>
          <a href=" "  >




          </a>
          </div>   
        </div>
    )
}

export default Productnoon
