import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Dropdown from 'rc-dropdown';
import 'rc-dropdown/assets/index.css';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import { firebase } from "../../Firebase/firebase.confige";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Logoutbutton from '../../Firebase/Logout'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
const useStyles = makeStyles((theme) => ({
  root: {
    position:'relative',
    bottom:'5px'
  },
  orders: {
    cursor:'pointer',
    fontFamily:'Arial',
    fontStyle:'Arial',
    '&:hover': {
      borderLeft: '4px solid Black' ,
      color:'Blue',

   },
  },
}));

export default function IsLogedIn() {
  const classes = useStyles();
  const [Auth, setAuth] = React.useState(false);
   
  const Logout=()=>{
    return firebase.auth().signOut();
  }
 let Name ='';
  const [Visibledrop, setVisibledrop] = React.useState(false);
  const Makevisible =()=>{
    setVisibledrop(!Visibledrop)
  }
  var currentuser = JSON.parse(localStorage.getItem("DbUserdata"));
 if (currentuser){
   console.log(currentuser.email)
   Name=currentuser.email
 }
 else{
   console.log('')
 }
   

  const menu = (
    <Menu
      style={{ width: 300,borderRadius:'10px' }}
      selectable={false}
      subMenuOpenDelay={3}
      subMenuCloseDelay={3}
    >
      <MenuItem className={classes.orders}  ><PermIdentityIcon/>{Name}</MenuItem>
      <MenuItem className={classes.orders}  ><FavoriteBorderIcon/>My Wish</MenuItem>
      <Divider />
      <MenuItem  className={classes.orders}  >
       
          
         <MarkunreadMailboxIcon/> 
      <Logoutbutton/>
       
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
         <Dropdown
        trigger={['click']}
         
        visible={Visibledrop}
        closeOnSelect={false}
        overlay={menu}
        animation="slide-up"
      >
         <IconButton aria-label="PersonLogedIn" onClick={Makevisible}>
        <PersonOutlineIcon />
        <h6>Na..</h6>
      </IconButton>
      </Dropdown>
    
    
    </div>
  );
}
