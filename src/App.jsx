import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar.jsx'
import './App.css'

function App() {

  return (
<Router>
      <div>
        <Navbar />
      </div>
    </Router>       
  )
}

export default App
