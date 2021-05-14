import React from "react";
import ReactDOM from "react-dom";

// or
import { GoogleLogin } from "react-google-login";

const responseGoogle = (response) => {
  console.log("test");
  console.log(response);
};
function Loging() {
  return (
    <GoogleLogin
      clientId="655008591629-q5ch1k9gofu1ajpuph6k2dd9i1cbga3d.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
}

export default Loging;
