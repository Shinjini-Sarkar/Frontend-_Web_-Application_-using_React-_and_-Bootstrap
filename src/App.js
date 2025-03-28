import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';  // Import Navbar
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
    <Navbar />  {/* Navbar should be here once */}
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/About' element={<About/>}/>
      <Route exact path='/Products' element={<Products/>}/>
      <Route exact path='/Contact' element={<Contact/>}/>
    </Routes>
  </Router>
  
  );
}

export default App;
