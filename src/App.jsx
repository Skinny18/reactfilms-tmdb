import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {

  return (
    <>
    <div className='App'>
      <Navbar/>
      <Outlet></Outlet>
    </div>
    </>
  )
}

export default App
