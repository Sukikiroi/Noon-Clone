import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CheckoutflexRight from './CheckoutflexRight'
import CheckoutflexLeft from './CheckoutflexLeft'
import Breadcrumbscheckout from './Breadcrumbscheckout';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    breadcrumbs:{
      width:'100%',
      height:'60px',
   
      marginBottom:'40px',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }
  }));
const Checkoutflexbox = () => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <div  className={classes.breadcrumbs}>
        <Breadcrumbscheckout/>
        </div>
      
        <Grid container  >
          <Grid item  xs={12} sm={6} lg={6}>
          
            <CheckoutflexLeft  />
          
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <CheckoutflexRight />
          </Grid>
        </Grid>
      </div>
    );
}

export default Checkoutflexbox
