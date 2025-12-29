import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Reveal } from './components/Reveal';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal delay={200}>
        <WhatWeDo />
      </Reveal>
      <Reveal delay={200}>
        <About />
      </Reveal>
      <Reveal delay={200}>
        <Reviews />
      </Reveal>
      <Reveal delay={200}>
        <Contact />
      </Reveal>
      <Footer />
    </div>
  );
}

export default App;
