import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Results from './components/Results';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Partners />
      <Services />
      <Testimonials />
      <Results />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;