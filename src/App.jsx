import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/header.jsx'
import Routing from './components/Routes/index.jsx'

import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()

  return (
    <>
      {location.pathname !== '/login' && <Header/>}
      <Routing/>
    </>
  )
}

export default App
