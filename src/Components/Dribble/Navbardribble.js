import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Box from '@material-ui/core/Box';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "1 rem",
    margin: "0",
    display: "flex",
    flexDirection:'row',
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: "80px",
    width: "100%",
   backgroundColor:'darkslategrey',
    textTransform:'capitalize',
  },
  
}));

const Navbardribble = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <AddShoppingCartIcon  className={classes.item1}/>
    <FavoriteBorderIcon className={classes.item2}/>
    <PersonOutlineIcon  className={classes.item3}/>
    </div>
  );
};

export default Navbardribble;
