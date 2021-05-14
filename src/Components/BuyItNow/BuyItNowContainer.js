import React, { useEffect, useState } from "react";
 
 
 import BuyItNowinfo from './BuyItnowInfo'
import axios from "axios";
export default function BuyItNowContainer() {
  const [Auth, setAuth] = React.useState(false);
  useEffect(() => {
    var currentuser = JSON.parse(localStorage.getItem("User"));
     if (currentuser.length ==0){
      setAuth(false);
     }
     else {
      setAuth(true);
     }
 
  }, []);


  return <div> 
<BuyItNowinfo/>

  </div>;
}
