import React, { useState, useEffect } from "react";
import "./header.css";

import { Layout } from "antd";
import { Button, Dropdown } from "antd";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function header() {
  const navigate = useNavigate();
  const handleNavigate = (route) => {
    navigate(`${route}`);
  };

  const [userData, setUserData] = useState(localStorage.getItem("userData"));

  const items = [
    {
      key: "1",
      label: <p onClick={() => handleNavigate("about")}>Know About Loom</p>,
    },
    {
      key: "2",
      label: (
        <p onClick={() => handleNavigate("usedCase")}>What are Used Cases?</p>
      ),
    },
    {
      key: "3",
      label: (
        <p onClick={() => handleNavigate("userGuide")}>How to Use Loom?</p>
      ),
    },
  ];

  return (
    <>
      {userData ? (
        <div id="header_container">
          <div className='container'>
          <input type="text" id="searchInput" placeholder="Search for people, tags, Folders, Spaces and looms"/>
          <div id='submitsearch' >
            <span>Search</span>
          </div>
          </div>
        </div>
      ) : (
        <div id="header_container">
          <img
            id="head-logo"
            src="https://logowik.com/content/uploads/images/loom9320.jpg"
            alt="loom logo"
          />

          <div id="header-nav">
            <Button type="primary" onClick={() => handleNavigate("/login")}>
              Log In / Sign Up
            </Button>
            <Button>Contact Support</Button>
            <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
              arrow
            >
              <MenuOutlined
                style={{ fontSize: "4vh", cursor: "pointer", color: "black" }}
              />
            </Dropdown>
          </div>
        </div>
      )}
    </>
  );
}

export default header;
