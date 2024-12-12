import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Weather } from './pages/Weather.jsx';
import { Navbar } from './components/Navbar';
import { Footer} from './components/Footer';
import React from 'react';
// import { getWeather } from './pages/Weather';
import './App.css'


function App() {
 
  return (
    <>
    <h1>Hello</h1>

    <Navbar/>,
    <Routes>
      <Route path='./' element={<Home />} />
      <Route path='./weather' element={<Weather />} />
    </Routes>,
    <Footer/>  


    </>
  )
}

export default App
    
  
