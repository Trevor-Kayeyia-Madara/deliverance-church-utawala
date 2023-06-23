import React from 'react'
import './style.css'
import {  Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/Home'

function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path='/' element ={<Home />} />
      </Routes>
    </>
  )
}

export default App