import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button , Grid  } from '@material-ui/core';
import './productpage.css'
import './CustomButton.css'
import './productcheckout.css'
const useStyles = makeStyles((theme) => ({
    paper:{
       
        width:'100%',
        height:'120px',
        overflow: 'auto',
        position:'fixed',
        zIndex :'2',
        top:'0',

    }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
  
      
      <Paper className={classes.paper} elevation={3} >

<Grid container  >


        <Grid item xs={12}>
    
        <div   style={{width:'100%'}} className='Productcheckout__buttons' >
                <Button  className='Productcheckout__addbuttons' >+</Button>
                <p className='Productcheckout__qyt'>5 </p>
                <Button  className='Productcheckout__minusbuttons'>-</Button>
            </div>
                        <br></br>
                        
        </Grid>  
        <Grid item xs={12}>
        <button style={{width:'100%'}} className='button__custom' >Buy it Now</button>

        </Grid>  
        
        
        
        




          </Grid>
      </Paper>
  
  );
}
