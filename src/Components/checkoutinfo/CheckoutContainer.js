import React, { useEffect, useState } from "react";
import Checkoutinfor from "./Checkoutinfo";
import Chekcoutinforgest from "./CheckoutinfoGest";
import { firebase, googleProvider } from "../../Firebase/firebase.confige";
import axios from "axios";
export default function Checkoutcontainer() {
  const [Auth, setAuth] = React.useState(false);

  var currentuser = JSON.parse(localStorage.getItem("DbUserdata"));
  console.log('yes'+currentuser)
  
  useEffect(() => {
    // var currentuser = JSON.parse(localStorage.getItem("User"));
     if (currentuser !==null){
    console.log('yes'+currentuser)
      setAuth(true);
     }
     else{
      setAuth(false);
     }
    
    // Met à jour le titre du document via l’API du navigateur
   

    
  }, []);


  return <div>{(Auth && <Checkoutinfor />) || < Chekcoutinforgest/>}</div>;
}
