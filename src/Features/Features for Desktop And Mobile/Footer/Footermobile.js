import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component }  from 'react';
import "./Footermobile.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Hidden } from '@material-ui/core';
import {
  createMuiTheme,
  ThemeProvider,
  useTheme,
  makeStyles,
} from "@material-ui/core/styles";
import { ChakraProvider } from "@chakra-ui/react";
import Button from '@material-ui/core/Button';
import { FcAutomotive } from "react-icons/fc";
import { FcSupport } from "react-icons/fc";
import { FcAssistant } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { FcIcons8Cup } from "react-icons/fc";
function Footermobile() {
  const theme = useTheme();
  
  const useStyles = makeStyles((theme) => ({
    footermobil:{
      position: 'fixed',
      left: '0',
      bottom:' 0',
      width: '100%',
      backgroundColor: 'white',
      color: 'white',
      textAlign: 'center',
     
    },
    
  }));
  const classes = useStyles();
  return (
    <ChakraProvider>
      <Router>
      <Hidden smUp> 
        <div className={classes.footermobil} >
    
           <Button >
               
           <span>  <img src="https://k.nooncdn.com/s/app/com/noon/images/bottomNav/trending-inactive.svg" alt="عليها طلب "style={{width:'100%'}}/></span>
          <span>   Cars </span>

           </Button>
           <Button >
               
               <FcSupport  size={32}/>
               <h6 style={{position:'relative',top:'30px',right:'30px'}}> Cars</h6>
    
               </Button>
               <Button >
               
               <FcAssistant  size={32}/>
               <h6 style={{position:'relative',top:'30px',right:'30px'}}> Cars</h6>
    
               </Button>
               <Button >
               
               <FcHome  size={32}/>
               <h6 style={{position:'relative',top:'30px',right:'30px'}}> Cars</h6>
    
               </Button>
              
               


        </div>
         </Hidden>
      </Router>
    </ChakraProvider>
  );
}

export default Footermobile;
