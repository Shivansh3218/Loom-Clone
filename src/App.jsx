import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/header.jsx'
import Routing from './components/Routes/index.jsx'

function App() {
  return (
    <>
      <Header/>
      <Routing/>
    </>
  )
}

export default App
