import React from 'react';
import RootLayout from './RouteLayout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/home';
import Projects from './Projects/projects';
import About from './About/about';
import Contact from './Contact/contact';
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
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
