import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Addresitem from './AddresItem';
import Addnewadressitem from './AddnewadressItem';
const useStyles = makeStyles((theme) => ({
    root:{
        width:'90%',
  margin:'auto',
 
        backgroundColor:'hsl(198, 40%, 98%)',
        display: 'grid',
        gap: '2rem',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        padding:'10px'
    },
    continue:{
        width:'100%',
        height:'100px',
     
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center',
        '& button':{
            background:'rgb(56, 102, 223) none repeat scroll 0% 0%;',
            color:'rgb(255, 255, 255)',
            textTransform: 'uppercase',
            width:'150px',
            height:'50px',
            borderRadius:'1px',
            fontWeight:'bold'
        }
    }
}));
const Adressesaddcontainer = () => {
    const classes = useStyles();
    return (
        <div style={{width:'100%'}}>
        <div  className={classes.root}>
          <Addresitem/>
          <Addresitem/>
         
          <Addnewadressitem/>
         
        </div>
        <div  className={classes.continue}>
            <button >Continue</button>
        </div>
        </div>
    )
}

export default Adressesaddcontainer
