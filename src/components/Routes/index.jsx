import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../pages/about";
import usedCase from "../../pages/usedCase.jsx";
import Home from "../../pages/home";
import Login from "../../pages/login";

const Routing = () => {
  return (
    <>
    <Routes>
      {/* <Route exact path="/" element={Home} />
      <Route path="/about" element={About} />
      <Route path="/contact" element={usedCase} /> */}
      <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  );
}

export default Routing;