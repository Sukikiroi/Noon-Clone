import React, { useState } from "react";

import { firebase } from "./firebase.confige";
class App extends React.Component {
  logout() {
    return firebase.auth().signOut();
  }

  render() {
    
    return <button onClick={this.logout.bind()}>Click to Logout</button>;
  }
}

export default App;
