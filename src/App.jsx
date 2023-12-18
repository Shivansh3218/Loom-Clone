import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header/header.jsx";
import Routing from "./components/Routes/index.jsx";
import theme from "./theme/theme.js";

import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <>
      <ThemeProvider theme={theme}>
        {location.pathname !== "/login" && <Header />}
        <Routing />
      </ThemeProvider>
    </>
  );
}

export default App;
