import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar.jsx'
import Home from './pages/Home.jsx'
import './App.css'

function App() {

  return (
<Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/*' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </div>
    </Router>       
  )
}

export default App
