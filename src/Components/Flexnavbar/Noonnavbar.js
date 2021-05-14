import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles((theme) => ({
    body: {
    margin:'0',
    padding:'0',
    height:'65px',
    width:'100%',
    backgroundColor:'yellow'
    },
    leftside:{
        display:'flex',
       
        justifyContent:'space-between',
        alignItems:'center',
alignItems:'center',

        
        height:'60px',
    width:'100%',
    },
    rightside:{
        display:'flex', 
        justifyContent:'space-between',
         
        alignItems:'center',
        height:'60px',
    width:'100%',
    },
    searchbar:{
        height:'30px',
        width:'600px',
        
        borderRadius:'6px',
        textAlign:'left',
        padding:'15px',
        border:'none',
        outline:'none'
    }
  }));
export const Noonnavbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.body}>
           <Grid container  >
            
           <Grid item xs={6}>
               <div className={classes.leftside}>
               <img src= 'https://k.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg' alt="Logo" />
<input className={classes.searchbar} type='text' placeholder='What Are You Loking For ?'></input>

               </div>
               </Grid>  
               <Grid item xs={1}></Grid> 
           <Grid item xs={4}>
           <div  className={classes.rightside}>
           <IconButton style={{textTransform:'capitalize',fontSize:'1.08333rem',color:'black' }} color="primary" aria-label="add to shopping cart">
   Category
</IconButton>
           <IconButton style={{textTransform:'capitalize',fontWeight:'600',color:'black',fontFamily:'Cairo',fontSize:'100%'}} color="primary" aria-label="add to shopping cart">
   العربية
</IconButton>
<IconButton  style={{textTransform:'capitalize',fontSize:'1.08333rem',color:'black' }} color="primary" aria-label="add to shopping cart">
Shipping to
</IconButton>

<IconButton color="primary" aria-label="add to shopping cart">
<Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/2.jpg" />
</IconButton>

<IconButton color="primary" aria-label="add to shopping cart">
<Badge badgeContent={11} color="primary">

<FavoriteBorderIcon style={{color:'black'}} />
</Badge>
 
</IconButton>
 
<Divider orientation="vertical" flexItem style={{height:'50%',marginTop:'15px'}}/>
<IconButton color="primary" aria-label="add to shopping cart">
<Badge badgeContent={4} color="primary">
<AddShoppingCartIcon />

</Badge>
  
</IconButton>




           </div>
               
               </Grid>    
               
               </Grid> 












        </div>
    )
}
