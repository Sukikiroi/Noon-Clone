import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Searchbar from './Searchbarmedium'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
    root:{
       
        wdith:'100%',
        height:'50px',
   
      
      
    },
    input: {
        color: 'red',
        wdith:'200px'
    }

    ,
    logogrid:{
        itemAlign :'center',
        marginTop:'-10px',
    },
    searchbargrid:{
        itemAlign :'center',
        marginTop:'-10px',
   
    },
    searchbar:{
        height:'35px',
        wdith:'300px',
   
        paddingRight:'180px',
        border:'groove ',
        
        borderRadius:'5px'
         
    }

  }));


const Navbarmobile = () => {
    const classes = useStyles();
    return (
        <div  className={classes.root}>
                   
     <Grid container  >
        <Grid item xs={2} className={classes.logogrid} >
        <img src=  "https://k.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg"   alt="Logo" />
        </Grid>

        <Grid item xs={10}  className={classes.searchbargrid}  >
      
     
         
           {/* <input   className={classes.searchbar} placeholder='what are you loking for' /> */}

        </Grid>


        </Grid>

     
        </div>
    )
}

export default Navbarmobile
