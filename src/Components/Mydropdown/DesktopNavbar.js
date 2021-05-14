import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import HomeIcon from "@material-ui/icons/Home";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import shopingcarticon from "./shopingcarticon.png";
import CategoryIcon from "@material-ui/icons/Category";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import logo from './logo.jpg';
import Searchbar from './Searchbarmedium'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LoginModal from './ModalLogin'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import InputBase from '@material-ui/core/InputBase';
import   Logo  from './slacklogo.png';
import { RiSearchLine } from 'react-icons/ri';

const useStyles = makeStyles((theme) => ({
  rootpaper:{
    width:'100%',
    height:'50px',
    backgroundColor:'Ivory',
    margin:'0 auto'
  
  },
  searchbargrid:{
    alignItems:'center'
  },
  accountgrid:{
    alignItems:'center',  
 
    marginTop:'10px'
  },
accountbutton:{
  position:'relative',
  left:'20px',
  marginTop:'-5px',
}
  ,
  wishgrid:{
    alignItems:'center',
   
    marginTop:'10px',
    paddding:'0px'

  },
  shoppinggrid:{

    marginTop:'10px',
    paddding:'0px'

  },
  categorygrid:{
    whiteSpace:'nowrap',
    marginTop:'5px',
   
  },
  categorybutton:{
    textTransform:'capitalize',
    backgroundColor:'black',
    borderRadius:'5px'
  },
  wishbutton:{
    marginTop:'-5px'
  },
  shoppingcartbutton:{
    marginTop:'-5px'
  },
  Loginbutton:{
    position:'relative',
    left:'20px',
    marginTop:'-5px',
    borderColor:'black',
    color:'black'
  },
  searchroot:{
    width:'30em',
    marginTop:'10px',
    backgroundColor:'white',
    borderRadius:'5px',
    '&:hover ': {
      backgroundColor:'Gainsboro',
   },
   
  },
  searchinput:{
    width:'15em',
    position:'relative',
    right:'18em',
    marginLeft:'10px',
    zIndex:'5'
  },
  searchicon:{
    marginTop:'0.3em',
    color:'grey',
    fontSize:'20px',
    marginLeft:'5px'
  },
  logo:{
    marginTop:'5px',
    position:'relative',
    left:'10px'
    
  },
  logopic:{
    height:'40px'
  }
}));

const theme = createMuiTheme({
  props: {
    // Name of the component
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application!
    },
  },
});

const Desktopnavbar = () => {
  const classes = useStyles();
  const [IsAuth, setIsAuth] = useState(false);

  const something=(e)=> {
    if (e.keyCode === 13) {


        console.log(e.target.value)


    }
}
  const hadnloging=()=>{
    setIsAuth(true)
  }

   

  return (
    <MuiThemeProvider theme={theme}>
    
        <Paper  className={classes.rootpaper} elevation={0}>


        <Grid container  >

        <Grid item xs={3} className={classes.logo}>
   <img src={Logo} alt="React Logo"  className={classes.logopic} />

        </Grid>
        <Grid item xs={9}>
        <Grid container  >
        <Grid item xs={6} className={classes.searchbargrid}>

          <div className={classes.searchroot}>

          <Grid container  >
          <Grid item xs={3}>

<RiSearchLine className={classes.searchicon}/>

          </Grid>
          <Grid item xs={3}> </Grid>
          <Grid item xs={3}> </Grid>
          <Grid item xs={3}>

          <InputBase onKeyDown={(e) => something(e) }
          placeholder='Search product ...'
        className={classes.searchinput}
         
        inputProps={{ 'aria-label': 'naked' }}
      />

          </Grid>

          </Grid>

          </div>
          


        </Grid>

        <Grid item xs={6}>
            
        <Grid container  >
        <Grid item xs={3}  className={classes.categorygrid}>
        
        <Button   className={classes.categorybutton} variant="contained" color="primary">
  Category
</Button>

        </Grid>
        <Grid item xs={3} className={classes.accountgrid}>

        {(IsAuth &&  
          
          <Button    className={classes.accountbutton}>  
        <PermIdentityIcon     />

        </Button>) 
        
        || 
        
        
        <LoginModal/>
      

}
      

        </Grid>
        <Grid item xs={3} className={classes.wishgrid}>
        <Button  className={classes.wishbutton} >
        <FavoriteBorderIcon/>

        </Button>

        </Grid>
        <Grid item xs={3} className={classes.shoppinggrid}>
        <Button >
        <Badge  className={classes.shoppingcartbutton}    badgeContent={4} color="primary">   
        <ShoppingCartIcon />
      </Badge>
      </Button>
        </Grid>
        </Grid>



        </Grid>

        </Grid>
         </Grid>

        </Grid>



        </Paper>
    </MuiThemeProvider>
  );
};

export default Desktopnavbar;
