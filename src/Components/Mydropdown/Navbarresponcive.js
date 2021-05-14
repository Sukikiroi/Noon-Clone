import React, { useState } from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Hidden from "@material-ui/core/Hidden";
import Badge from "@material-ui/core/Badge";
import "./searchbar.css";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { FcSearch, FcManager, FcBusinesswoman } from "react-icons/fc";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Avatar from "@material-ui/core/Avatar";
import Shoppingcarticon2 from "./shopingcarticon.png";
import PageviewIcon from "@material-ui/icons/Pageview";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Categorybuttons from './Categorybutton'
import { flexbox } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import logo from './logo2.png';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';
import Dropdown from 'rc-dropdown';
import DeleteIcon from '@material-ui/icons/Delete';
import ReactDOM from 'react-dom';
 
const useStyles = makeStyles((theme) => ({
  searchpaper:{
    width:'200px',
    position:'relative',
    right:'40px',
    top:'10px'
  }
  
  
  ,
  dropdown:{
width:'200px',
borderRadius:'10px',
height:'300px'
  },
  logo:{
   
    position:'relative',
    top:'150px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  appbar: {
    backgroundColor: "white",
    zIndex: "1",
  },
  search: {
    color: "#DCDCDC",
    position: "relative",
    left: "200px",
  },
  man: {
    height: "45px",
    zIndex: "3",
    cursor: "pointer",
    fontSize: "20px",
    borderRadius: "10px",
    width: "120px",
    backgroundColor: "white",
    color: "black",
    position: "relative",
    left: "20px",
    textTransform: "lowercase",
  },
  man2: {
    height: "45px",
    borderRadius: "10px",
    width: "120px",
    fontSize: "20px",
    backgroundColor: "#FFB6C1",
    color: "white",
    position: "relative",
    left: "20px",
    textTransform: "lowercase",
    "&:hover": {
      background: "#FFB6C1",
    },
  },
  women: {
    height: "45px",
    borderRadius: "10px",
    width: "120px",
    fontSize: "20px",
    backgroundColor: "#FFB6C1",
    color: "white",
    position: "relative",
    left: "40px",
    textTransform: "lowercase",
    "&:hover": {
      background: "#FFB6C1",
    },
  },
  women2: {
    height: "45px",
    borderRadius: "10px",
    width: "120px",
    fontSize: "20px",
    backgroundColor: "white",
    color: "black",
    position: "relative",
    left: "40px",
    textTransform: "lowercase",
  },
  searchicon: {
    color:'gold',
    fontSize: "45px",
    position: "relative",
 left:'50px'
    
  },
  logo: {
    position: "relative",
    bottom: "100px",
  },
  shipingbutton: {
    disableRipple: true,
  },
  search: {
    color: "Gainsboro",
  },
  categorybutton: {
    textTransform: "unset",
    color: "black",
    fontSize: "20px",
  },
  categorydisplay:{
    columnCount: "6",
    columngap: "4",
   
  
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

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);
function onSelect({ key }) {
  console.log(`${key} selected`);
}

function onVisibleChange(visible) {
  console.log(visible);
}
export default function Navbarresponcive() {
  const classes = useStyles();
  const [man, setman] = useState(false);
  const [women, setwomen] = useState(false);
  const [showcat, setshowcat] = React.useState(false);
const  showcategory=()=>{
  setshowcat(!showcat)
}
const menu = (
  <Menu  className={classes.dropdown} >
    <MenuItem disabled>disabled</MenuItem>
    <MenuItem key="1">one</MenuItem>
    <Divider />
    <MenuItem key="2">two</MenuItem>
  </Menu>
); 
    const Category = [
      { id: 1, title: "Beauty" },
      { id: 2, title: "Victor Wayne" },
      { id: 3, title: "Jane Doe" },
    ];
 

  const deletedefaultvalue = (event) => {
    event.target.defaultValue = "";
  };
  const handleman = () => {
    setman(!man);
    setwomen(!women);
  };
  const handlewomen = () => {
    setwomen(!women);
    setman(!man);
  };

  const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }))(InputBase);
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={0} lg={3}>
            <br></br>
          <img src={logo} alt="Logo" className={classes.logo} />
          </Grid>
          <Grid item xs={12} lg={3}>
            {(man && (
              <Button
                onClick={handleman}
                color="primary"
                className={classes.man}
                startIcon={<FcManager />}
              >
                Man
              </Button>
            )) || (
              <Button
                onClick={handleman}
                color="primary"
                className={classes.man2}
                startIcon={<FcManager />}
              >
                Man
              </Button>
            )}

            {(women && (
              <Button
                onClick={handlewomen}
                color="primary"
                className={classes.women}
                startIcon={<FcBusinesswoman />}
              >
                Women
              </Button>
            )) || (
              <Button
                onClick={handlewomen}
                color="primary"
                className={classes.women2}
                startIcon={<FcBusinesswoman />}
              >
                Women
              </Button>
            )}
          </Grid>

          <Grid item xs={12} lg={3}>
            <Grid container>
              <Grid item xs={6}>
                <Button 
                onClick={showcategory}
                  className={classes.categorybutton}
                  color="primary"
                  endIcon=    {(showcat &&    <ArrowDropUpIcon />      ) ||      <ArrowDropDownIcon />}
               
                >
                  Category
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Paper  className={classes.searchpaper} elevation={0}>
                <Grid container>
                <Grid item xs={6}>
                <BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input" />

                </Grid>
                <Grid item xs={6}>
                <Button>
                <PageviewIcon   className={classes.searchicon}/> 
                </Button>
                </Grid>
                </Grid>
             
 
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={0} lg={3}>
            <Grid container>
              <Grid item xs={0} lg={6}>
                <Hidden mdDown>
                  <Button className={classes.shipingbutton}>
                    <StyledBadge badgeContent={16} color="secondary">
                      <img src={Shoppingcarticon2} height="20px" width="40px" />
                    </StyledBadge>
                  </Button>
                </Hidden>
              </Grid>
              <Grid item xs={0} lg={6}>
                <Hidden mdDown>
                <Dropdown  
        trigger={['click']}
        overlay={menu}
        animation="slide-up"
        onVisibleChange={onVisibleChange}
      >
        <button style={{ width: 100 }}>
        <Grid container>
        <Grid item xs={6} >
        <Avatar
                    alt="Cindy Baker"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAyQp54rDPMakrfCNaRV6pVDoeHHCbMqyCw&usqp=CAU"
                  />
        </Grid>

        <Grid item xs={6} >
        

<h1>  Name</h1>
          </Grid>

        </Grid>
      
              
        </button>
      </Dropdown>
                  
                </Hidden>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
     
     


        
        {(showcat &&          <Categorybuttons />) ||  <h1></h1>}
           

     
  
  
      </div>
    </MuiThemeProvider>
  );
}
