import React from "react";
import "../login/Login.css";

function Login(props) {
  return (
    <div className="login_content">
      Sign In using Google Account
      <div>
        <button className="button button2" onClick={props.signin}>
          Google
        </button>
      </div>
    </div>
  );
}

export default Login;
