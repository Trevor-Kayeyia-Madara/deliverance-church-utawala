import React from 'react'
import './style.css'
import {  Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/Home'
import Footer from './Components/Footer'

function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path='/' element ={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App