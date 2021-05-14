import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
const useStyles = makeStyles((theme) => ({
    paperproduct:{
        width:'200px',
        borderRadius:'20px',
    },
    paperimage:{
        borderRadius:'20px',
       
    },
    producttitle:{
        marginBottom:'-20px',
        marginLeft:'30px',
        fontWeight:'bold',
        marginTop:'-10px'
    },
    productprice:{
        marginLeft:'30px',
       
    },
    badgeqty:{
      position:'relative',
      left:'130px',
     
    },
    root: {
        flexGrow: 1,
      },
  }));
const Productcheckout = ({Picture,Itemcount}) => {
    const classes = useStyles();
    return (
 
         <Paper elevation={0} className={classes.paperproduct}>
         <Paper elevation={0} className={classes.paperimage}>
            {/* Image */}
           
            <Grid container spacing={3}>
            <Grid item xs={12}>
            <Badge badgeContent={Itemcount} color="error" className={classes.badgeqty}>

            </Badge>
            <img   src= {Picture} alt="Logo" />

            </Grid>   
                   <Grid item xs={12}  className={classes.producttitle}>
                       <h1>Cool T-Shirt</h1>
                   </Grid>
                   <Grid item xs={12}  className={classes.productprice}>
                       <h1>1000 $</h1>
                   </Grid>
            </Grid>

           
         
            
            
            </Paper>
          
            </Paper>
 
    )
}

export default Productcheckout
