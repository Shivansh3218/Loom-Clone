import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/userActions.js";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
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
    console.log(decoded);
    localStorage.setItem("userData", decodedToken);
    navigate("/dashboard");
  };
  useEffect(() => {
    const client_id = import.meta.env.VITE_API_GOOGLE_CLIENT_ID;

    google?.accounts.id.initialize({
      client_id: client_id,
      callback: handleCallbackResponse,
    });

    google?.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      width: 300,
      size: "larger",
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
    <div id="container" >
    
    <div className="context">
      {/* <div id="login-container" > */}
      <h1 id="heading">Please sign in to continue</h1>
      <div
        id="signInDiv"
        className="custom-google-button"
      >
        Login with Google
      </div>
      </div>
    </div>
    
  );
};
export default Login;
