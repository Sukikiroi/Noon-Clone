import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
import './list.css'
import { Typography } from '@material-ui/core';

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
const theme = createMuiTheme({
  props: {
    // Name of the component
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true // No more ripple, on the whole application!
    }
  }
});
const useStyles = makeStyles((theme) => ({
 

  dropdowncustom: {
    width: "300px",
    color:'black',
    disableRipple: true


  },

  arrowicon:{
position:'relative ',
left:'80px',
fontsize:'large',

  },

  listcategory:{
    position:'relative ',
    left:'80px',
    
  
  }
}));

export default function TextButtons() {
  const classes = useStyles();
  const [dropdwn, setdropdwn] = useState(true);
const handledropdown =()=>{
  setdropdwn(!dropdwn);
}
const numbers = ["beauty & beyond","Single-line item","Single-line item","Single-line item"];
const listItems = numbers.map((number) =>
<pre>{number}          (360)</pre>
);
  return (
    <MuiThemeProvider theme={theme}>
    <div className={classes.root}>
      <Button
        className={classes.dropdowncustom}
        overflow="hidden"
        onClick={handledropdown}
        color="primary"
        endIcon={(dropdwn && < ArrowRightOutlinedIcon className={classes.arrowicon}/> ) || < ArrowDropDownOutlinedIcon className={classes.arrowicon}/> }
      >
        <Typography style={{textTransform:'lowercase',fontWeight:'bold'}} variant="h6" component="h2" gutterBottom>
        Category
      </Typography>
      </Button>

      {(dropdwn &&  <h1></h1> ) ||<ul class='list'>{listItems}  </ul> }
     

    </div>
    </MuiThemeProvider>
  );
}
