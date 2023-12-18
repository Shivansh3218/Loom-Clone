import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/userActions.js";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { Dropdown } from "antd";
import slack from "./assets/slack-new-logo.svg";
import outlook from "./assets/outlook-1.svg";
import apple from "./assets/apple-14.svg";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleCallbackResponse = async (response) => {
    console.log("this is running");
    const decodedToken = jwtDecode(response.credential);

    localStorage.setItem("userData", decodedToken);
    navigate("/library");
  };
  useEffect(() => {
    const client_id = import.meta.env.VITE_API_GOOGLE_CLIENT_ID;

    google?.accounts.id.initialize({
      client_id: client_id,
      callback: handleCallbackResponse,
    });

    google?.accounts.id.renderButton(document.getElementById("signInDiv"), {
      size: "large",
      shape: "pill",
      width: "350px",
      text: "Sign In with Google",
    });
  }, []);
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = () => {
    const user = {
      username: username,
      token: token,
    };

    loginUser(user.username, user.token);
  };

  return (
    <div id="container">
      <div id="header_container">
        <img
          id="head-logo"
          src="https://logowik.com/content/uploads/images/loom9320.jpg"
          alt="loom logo"
        />

        <div id="header-nav">
          <Button>Contact Support</Button>
        </div>
      </div>

      <div className="context">
        {/* <div id="login-container" > */}
        <h1 id="heading">Please sign in to continue</h1>
        <div
          id="signInDiv"
          className="custom-google-button"
          style={{ width: "0rem  !important", height: "50px" }}
        >
          Login with Google
        </div>
        <div className="login-apps">
          <img src={apple} id="apple" alt="" />
          <p classname="companies" style={{ fontSize: "0.7rem" }}>
            Login with Apple
          </p>
        </div>
        <div className="login-apps">
          <img src={slack} id="apple" alt="" />
          <p classname="companies" style={{ fontSize: "0.7rem" }}>
            Login with Slack
          </p>
        </div>
        <div className="login-apps">
          <img src={outlook} id="apple" alt="" />
          <p classname="companies" style={{ fontSize: "0.7rem" }}>
            Login with Outlook
          </p>
        </div>
        <p style={{ color: "black" }}>
          By signing up, you acknowledge that you have read and understood, and
          agree to Our Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
};
export default Login;
