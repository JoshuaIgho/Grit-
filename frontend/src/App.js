import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Work from './components/Work';
import Reflections from './components/Reflections';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Manifesto />
      <Work />
      <Reflections />
      <Contact />
    </div>
  );
}

export default App;