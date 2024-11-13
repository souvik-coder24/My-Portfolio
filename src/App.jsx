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
      <section id="home">
        <Hero />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="design">
        <Design />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}
export default App;