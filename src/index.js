import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';
import ProductsContextProvider from './Components/Cart Shopping/contexts/ProductsContext'
import CartContextProvider from './Components/Cart Shopping/contexts/CartContext'
import 'antd/dist/antd.css';
import { ChakraProvider } from "@chakra-ui/react"
ReactDOM.render(
  <React.StrictMode>
      <HelmetProvider>
    <ProductsContextProvider>
        <CartContextProvider> 
        <ChakraProvider>
    <App style= {{overflow:'hiden',overflowX:'hiden'}}/>
    </ChakraProvider>
    </CartContextProvider>
      </ProductsContextProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
