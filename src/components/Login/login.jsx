/* global google */
import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";

import { connect } from "react-redux";
import { loginUser } from "../../redux/userActions.js";
import "./login.css";

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
  
    google?.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    google?.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      width: 200,
      size: "large",
    });

  
  },[])
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = () => {
    // Simulate a login request and get the user credentials
    // Replace this with your actual authentication logic
    const user = {
      username: username,
      token: token,
    };

    // Dispatch the loginUser action to save the user credentials in Redux
    loginUser(user.username, user.token);
  };

  return (
    <div style={{width:"100vw"}}>
 
 <div className="context">
          {/* <img id="backgroundImg" src={backgroundImg} alt="" /> */}
          <div id="login-container">
            {/* <img id="ng-logo" src={logo} alt="" /> */}
            <h2 id="learn-heading">Embark On Your Learning Journey</h2>
            {/* <h5>Continue to {originName}</h5> */}
            <div id="signInDiv" className="custom-google-button">
              Login with Google
            </div>
            {/* {loading ? (
              <img src={loader} alt="loader" id="loading-image" />
            ) : null} */}
          </div>
        </div>

      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};
export default Login;
