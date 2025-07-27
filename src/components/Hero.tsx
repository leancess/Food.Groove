import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToPartners = () => {
    const partnersSection = document.getElementById('partners');
    if (partnersSection) {
      partnersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://www.youtube.com/embed/wK-wd3EzsTQ?autoplay=1&mute=1&loop=1&playlist=wK-wd3EzsTQ&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&enablejsapi=0"
          title="Groove Marketing Video"
          className="w-full h-full object-cover"
          style={{
            minWidth: '100%',
            minHeight: '100%',
            width: '100vw',
            height: '56.25vw', // 16:9 aspect ratio
            minHeight: '100vh',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none'
          }}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center z-30">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
            Lotamos seu restaurante com a{' '}
            <span className="text-[#E50E0E]">estratégia certa!</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-white mb-12 leading-relaxed font-light">
            Marketing estratégico completo para bares, restaurantes, cafés e pizzarias
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="http://bit.ly/36XSkWU" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-400 hover:bg-green-500 text-black font-bold px-10 py-5 rounded-full transition-all duration-300 flex items-center justify-center group text-lg shadow-2xl hover:shadow-green-400/25"
            >
              Quero vender mais
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={scrollToPartners}
              className="border-3 border-white text-white hover:bg-white hover:text-[#E50E0E] font-bold px-10 py-5 rounded-full transition-all duration-300 text-lg"
            >
              Ver casos de sucesso
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;