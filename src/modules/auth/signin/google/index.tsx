import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import { gapi } from "gapi-script";
// import "../GoogleAuth/GoogleAuth.css";

const GoogleAuth = ({ informParent }) => {
  useEffect(() => {
    function initClient() {
      gapi.client.init({
        clientId: `1044881337458-96jjjjqoqspglp12n98nnguik875mee2.apps.googleusercontent.com`,
        scope: "",
      });
    }
    gapi.load("client:auth2", initClient);
  });

  const responseGoogle = async (response) => {
    try {
      const result = await axios.post(
        "http://localhost:5050/auth/google-login",
        { idToken: response.tokenId },
        { withCredentials: true }
      );

      informParent(result);
      console.log(result);
    } catch (error) {
      console.log("GOOGLE SIGNIN ERROR", error.response);
    }
  };

  return (
    <div>
      <GoogleLogin
        clientId={`1044881337458-96jjjjqoqspglp12n98nnguik875mee2.apps.googleusercontent.com`}
        buttonText="Continue with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        render={(renderProps) => (
          <button
            className="social-icon-google"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            google login
            <i className="fab fa-google" />
          </button>
        )}
      />
    </div>
  );
};

export default GoogleAuth;
