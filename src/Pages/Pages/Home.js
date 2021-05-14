import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './Home.css'
import React, { Component }  from 'react';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useEffect}from 'react'
import {
  createMuiTheme,
  ThemeProvider,
  useTheme,
} from "@material-ui/core/styles";
import { ChakraProvider } from "@chakra-ui/react";
import Carousel from '../../Features/Features for Desktop And Mobile/Header'
import Productcard from "../../Components/Cards for Desktop/Productcard";
import Loging from "../../Features/Loging";
import Shoppingcart from "../../Features/shoppingcart";
import Searchinput from "../../Features/searchinput";
import Footermobile from '../../Features/Features for Desktop And Mobile/Footer/Footermobile'
import Store from '../../Components/Cart Shopping/pages/store/index'
function Home() {
  const theme = useTheme();
  useEffect(() => {
    // this is only executed once
   


  }, [])
  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <br></br>
         
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="product-container">
          <Store/>
          </div>
         
        <Footermobile/>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default Home;
