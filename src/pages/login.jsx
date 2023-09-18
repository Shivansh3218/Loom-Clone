import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';

import { connect } from 'react-redux';
import { loginUser } from '../redux/userActions';


const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');
  
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
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  );
    
    };
export default Login;