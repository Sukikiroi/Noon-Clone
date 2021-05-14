import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import Button from "@material-ui/core/Button";
import InputBase from '@material-ui/core/InputBase';
import PageviewIcon from '@material-ui/icons/Pageview';
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
     
     
  },
}))(Badge);
const useStyles = makeStyles((theme) => ({
  nav: {backgroundColor:'Snow'

},
  navlist: {
    margin: "0",
    padding: "0",
    display: "flex",
  },
  searchbar: {
    width: "30em",
 
 
 
border:'1px solid black',
    height: "38px",
    borderRadius: "5px",
    margin: "0",
    padding: "0",
    display: "flex",
    alignContent:'right',
    justifyContent:'flex-end',
    alignItems:'center',
  },
  logo: {
    height: "50px",
    display: "grid",
    alignContent: "center",
  },
  categorybutton: {
    textTransform: "capitalize",
    backgroundColor: "black",
  },
  loginbutton: {
    textTransform: "capitalize",
    border: "1px solid black",
    color: "black",
    width:'7em',
  },
  searchicon:{
fontSize:'4em',
position:'relative',
left:'13px'
  },
  searchinput:{
   margin:'0 auto'

  }
}));
function Flexnavbar() {
  const classes = useStyles();
  return (
    <div className={classes.nav}>
      <List
        className={classes.navlist}
        component="nav"
        aria-label="main mailbox folders"
      >
         <ListItem>     <div className={classes.logo}>Logo</div>  </ListItem>
    
        <ListItem>
        <div className={classes.searchbar}>
            
            
        <InputBase
        className={classes.searchinput}
        placeholder="Search product ...         "
        inputProps={{ 'aria-label': 'naked' }}
      />
      

         <Button style={{fontSize:'1em'}}>

          <PageviewIcon      className={classes.searchicon}  /> 
          </Button>
       
        
        
        </div>
        </ListItem>
        <ListItem>
          <Button
            className={classes.categorybutton}
            variant="contained"
            color="primary"
          >
            Category
          </Button>
        </ListItem>
        <ListItem>
          <Button
            className={classes.loginbutton}
            variant="outlined"
            color="primary"
          >
            Login
          </Button>
        </ListItem>

        {/* <ListItem>
          <IconButton aria-label="profile">
            <PersonOutlineIcon />
          </IconButton>
        </ListItem> */}
        <ListItem>
          <IconButton aria-label="wish">
            <FavoriteBorderIcon style={{fontSize:'30px'}} />
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton aria-label="cart">
            <StyledBadge  badgeContent={4}  color='primary' >
              <ShoppingCartIcon style={{fontSize:'30px'}} />
            </StyledBadge>
          </IconButton>
        </ListItem>
      </List>
    </div>
  );
}

export default Flexnavbar;
