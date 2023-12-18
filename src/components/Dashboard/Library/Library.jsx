import React from "react";
import { Link } from "react-router-dom";
import "./library.css";

const Library = () => {
  return (
    <div id="library-container">
      <div className="library-header">
        <div className="library-header-left">
          <h2>My Library</h2>
          <h1>Library</h1>
        </div>

        <div className="library-header-right">
          <button className="library-header-btn" id="left-btn">New Video</button>
          <button className="library-header-btn">New Folder</button>
        </div>
      </div>
      <ul>
        <li>
          <Link to="/videos">My Videos</Link>
        </li>
        <li>
          <Link to="/analytics">Analytics</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>

      <h3>Videos</h3>
    </div>
  );
};

export default Library;
