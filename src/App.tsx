import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Results from './components/Results';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ContactPopup from './components/ContactPopup';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero onOpenPopup={openPopup} />
      <Partners />
      <Services onOpenPopup={openPopup} />
      <Testimonials />
      <Results onOpenPopup={openPopup} />
      <CTA onOpenPopup={openPopup} />
      <Footer />
      <ContactPopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
}

export default App;