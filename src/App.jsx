import React from 'react';
import './App.css';
import ParticleCanvas from './ParticleCanvas';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
// import Skills from "./Components/Skills";


function App() {
  return (
    <div className="App">
      <ParticleCanvas />
      <Navbar />
      <Hero />
      {/* <Skills /> */}
    </div>
  );
}

export default App;