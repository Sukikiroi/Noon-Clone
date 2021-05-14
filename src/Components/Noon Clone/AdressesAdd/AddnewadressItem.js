import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles((theme) => ({
    root:{
        width:'300px',
        height:'200px',
        border:'1px solid rgb(226, 229, 241)',
        padding:' 13px 15px 16px',
        color:'#404553',
        boxShadow: ' rgba(0, 0, 0, 0.04) 0px 3px 2px 0px',
        borderRadius: '2px',
        '&:hover': {
            border:'1px solid rgb(56, 102, 223)',
            boxShadow: ' rgb(56, 102, 223) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 3px 2px 0px',
         },
    margin:'10px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        '& h3':{
            fontSize: '1.1rem',
        }
       
    }
}));
const Addnewadressitem = () => {
    const classes = useStyles();
    return (
        <button className={classes.root}>
      
          
            <AddIcon/>
            <h3>Add New Address</h3>
       
  
        </button>
    )
}

export default Addnewadressitem
