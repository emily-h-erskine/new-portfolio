import React from 'react';
import RootLayout from './RouteLayout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/home';
import Projects from './Projects/projects';
import About from './About/about';
import Contact from './Contact/contact';

import DeVilles from './ProjectCreationInfo/DeVilles/DeVillesProject';
import DeVillesPrototype from './ProjectCreationInfo/DeVilles/DeVillesPrototype';

import RSA from './ProjectCreationInfo/RSA/RSAProject';
import RSAPrototype from './ProjectCreationInfo/RSA/RSAPrototype';

import Play25Online from './ProjectCreationInfo/25/25Project';
import Play25OnlinePrototype from './ProjectCreationInfo/25/25Prototype';

import TheGymAdvisers from './ProjectCreationInfo/TheGymAdvisers/TheGymAdvisersProject';
import TheGymAdvisersPrototype from './ProjectCreationInfo/TheGymAdvisers/TheGymAdvisersPrototype';

import Lexie from './ProjectCreationInfo/Lexie/LexieProject';
import LexiePrototype from './ProjectCreationInfo/Lexie/LexiePrototype';



import './App.css';

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/devilles" element={<DeVilles />} />
          <Route path="/devilles-prototype" element={<DeVillesPrototype />} />

          <Route path="/25" element={<Play25Online />} />
          <Route path="/25-prototype" element={<Play25OnlinePrototype />} />

          <Route path="/RSA" element={<RSA />} />
          <Route path="/RSA-prototype" element={<RSAPrototype />} />

          <Route path="/TheGymAdvisers" element={<TheGymAdvisers />} />
          <Route path="/TheGymAdvisers-prototype" element={<TheGymAdvisersPrototype />} />

          <Route path="/Lexie" element={<Lexie />} />
          <Route path="/Lexie-prototype" element={<LexiePrototype />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
