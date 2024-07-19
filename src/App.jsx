import React from 'react';
import './App.css';
import ParticleCanvas from './ParticleCanvas';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Skills from "./Components/Skills/Skills";
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import Design from './Components/Designs/Design';


function App() {
  return (
    <div className="App">
      <ParticleCanvas />
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects/>
      <Design/>
      <Footer />
    </div>
  );
}

export default App;