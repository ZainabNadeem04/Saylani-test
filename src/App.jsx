import React from 'react';
import Login from './Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HerSection from './Hersection';
import Doctor from './Doctor';
import Nav from './Nav';
import About from './About';
import Card from './Cards';
import Contact from './Contact';
import Appoinment from './Appoiment'
import Sign from './Sign';
import Setapp from './Setapp';
import Showapp from './Showapp';
import Patient from './Patient';

function App() {
   
  return (
    <>
     
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<HerSection />} /> {/* Home Page */}
        <Route path="/about" element={<About />} />
        <Route path="/cards" element={<Card />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/showapp" element={<Showapp />} />
        <Route path="/setapp" element={<Setapp />} />
        <Route path="/doc" element={<Doctor />} />
        <Route path="/pat" element={<Patient />} />
        <Route path="/ap" element={<Appoinment />} />
       {/* Add route for Clone component */}
        {/* Add more routes as necessary */}
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
