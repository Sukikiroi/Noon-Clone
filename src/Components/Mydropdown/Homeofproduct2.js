import React from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Badge } from "@chakra-ui/react"
import Rating from '@material-ui/lab/Rating';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
const Homeofproduct = ({Image}) => {

  const useStyles = makeStyles({
    root: {
   
     height:'250px',
     width:'200px',
     
     margin:'5px',
     '&:hover': {
      boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)',
      transition:'0.3s',
      borderRadius:'5px'
   },
   
  
    },
  
    paperimage:{
      height:'150px',
    width:'150px',
    fontSize:'100%'
    },




    image:{
      height:'100%',
  width:'100%',
      
   
    },
  
    title:{
  paddingBottom:'20px'
    },
    price:{
      fontWeight:'bold'
    },
    off:{
  marginLeft:'10px',
  fontSize:'10px'
  
    },
    previosprice:{
 textDecorationLine:'line-through',
      whiteSpace:'nowrap',
      fontSize:'10px',
      color:'red'
    }
   ,
   wish:{
     position:'relative',
     bottom:'140px',
     left:'135px'
   },
   shoppingcart:{
     color:'FireBrick',
   }
  });
  const classes = useStyles();
    return (
      
  <Card className={classes.root} elevation={0}>
<Grid container >
<Grid item xs={12}>
 <div   className={classes.paperimage} >


  
  <img    className={classes.image}  src={Image} alt="Logo" />  

  
 <Checkbox  className={classes.wish}icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />
 
  </div>
  </Grid>
        <Grid item xs={12}>
        <Grid container >
        <Grid item xs={12}    className={classes.title} >Stainless Steel Electric</Grid>     
        <Grid item xs={12} className={classes.price}  >  SAR 28.80  </Grid>
        <Grid item xs={12}>
        <Grid container >
        <Grid item xs={3} className={classes.previosprice} >  SAR 40.80 </Grid>
        <Grid item xs={3}   className={classes.off} > <Badge colorScheme="green" >70%</Badge></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        </Grid>
        <Grid item xs={12}>
         
        <Grid container >
        <Grid item xs={6}>
           
          <AddShoppingCartIcon className={classes.shoppingcart} />
       
          </Grid>
        <Grid item xs={6}> <Rating name="size-small" defaultValue={2} size="small" /></Grid>

        </Grid>


        </Grid>


        </Grid>
        </Grid>
        </Grid>
</Grid>

  </Card>

      
    )
}

export default Homeofproduct
