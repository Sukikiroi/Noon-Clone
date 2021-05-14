import React, { useState } from "react";

import { firebase, googleProvider } from "./firebase.confige";
import axios from 'axios';
class App extends React.Component {
  greetUser() {
    return firebase.auth().signInWithPopup(googleProvider);
  }

  render() {
    firebase.auth().onAuthStateChanged((user) => {


      if (user) {
   
console.log("Login")
        window.location.reload();
        localStorage.setItem('User', JSON.stringify(user));
       
      } else {
         
console.log("Logout")
        localStorage.setItem('User', null);
      }
    });
    return <button onClick={this.greetUser.bind()}>Google</button>;
  }
}

export default App;
