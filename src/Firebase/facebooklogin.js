import React from "react";

import { firebase, googleProvider ,facebookProvider} from "./firebase.confige";
class App extends React.Component {

  greetUser() {
    return firebase.auth().signInWithPopup(googleProvider);
  }
facebooklogin(){
  return firebase.auth().signInWithPopup(facebookProvider);

}
  render() {
   

    
    return (
      <button onClick={this.facebooklogin.bind()}>facebook</button>
    );
  }
}

export default App;
