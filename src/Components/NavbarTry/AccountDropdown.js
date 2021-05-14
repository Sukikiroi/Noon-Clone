import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';
const useStyles = makeStyles((theme) => ({
    menu:{
        height:'300px',
        width:'150px',
        display:'flex',
        flexDirection:'column',
     
         
    },
    menuitem:{
 justifyContent:'center',
 display:'flex',
 cursor:'pointer',
 '& img':{
     height:'19px',
     width:'19px',
     marginRight:'10px'
 }
 
    },
    menuitem_div:{
        width:'100%',
        height:'30px',
      fontSize:'19px',
      lineHeight:'19px',
        display:'flex',
        
    },
   
}));
const onSelect =(key)=>{
    console.log(`${key} selected`);
}
const onVisibleChange =(visible)=>{
 
    console.log(visible);
  }
const Accountdropdown = () => {
    const classes = useStyles();
    const menu = (
        <Menu  className={classes.menu} onSelect={onSelect}>
        
          <MenuItem className={classes.menuitem}  key="1">
              <div  className={classes.menuitem_div}>
                  
                  <img src="https://z.nooncdn.com/s/app/com/noon/icons/notepad.svg" alt="Orders"/>
                 
            
              Orders
         
              </div>
              </MenuItem>
              <MenuItem className={classes.menuitem}  key="2">
              <div  className={classes.menuitem_div}>
              
              <img src="https://z.nooncdn.com/s/app/com/noon/icons/book.svg" alt="Addresses"/>
              Adresses
         
              </div>
              </MenuItem>
              <MenuItem className={classes.menuitem}  key="3">
              <div  className={classes.menuitem_div}>
              <img src="https://z.nooncdn.com/s/app/com/noon/icons/credit-card-o.svg" alt="Payments"></img>
              Payments
         
         
              </div>
              </MenuItem>
              <MenuItem className={classes.menuitem}  key="4">
              <div  className={classes.menuitem_div}>
              <img src="https://z.nooncdn.com/s/app/com/noon/icons/user.svg" alt="Profile"></img>
              Profile
         
         
              </div>
              </MenuItem>
            

        </Menu>
      );
   
    return (
        <div>
             <Dropdown 
        trigger={['click']}
        overlay={menu}
        animation="slide-up"
        >
         <Button style={{textTransform:'capitalize ',color:'black',fontWeight:'bold'}} endIcon={<ArrowDropDownIcon/> } color="primary">My Account</Button>   
       </Dropdown>
        </div>
    )
}

export default Accountdropdown
