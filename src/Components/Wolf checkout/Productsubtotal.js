import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  
    productgrid:{
      whiteSpace:'nowrap'
    }
  }));
const Productsubtotal = ({Title,Subtotal}) => {
    const classes = useStyles();
    return (
  
              <Grid item xs={12}>
          <Grid container>
            <Grid item xs={3} className={classes.productgrid} >
            {Title}
            </Grid>
            <Grid item xs={3}>
        
            </Grid>
            <Grid item xs={3}>  </Grid>
            <Grid item xs={3}>     {Subtotal}     </Grid>
          </Grid>
          
        </Grid>
     
    )
}

export default Productsubtotal
