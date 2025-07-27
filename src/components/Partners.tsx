import React from 'react';

const Partners = () => {
  const partners = [
    { name: 'Corona', logo: '/marcas que são groove/Corona.png' },
    { name: 'Osmar', logo: '/marcas que são groove/Seuosmar.png' },
    { name: 'Cheirinbao', logo: '/marcas que são groove/Cheirinbao.png' },
    { name: 'Cliente 1', logo: '/marcas que são groove/Fotos/Prancheta 10.png' },
    { name: 'Cliente 2', logo: '/marcas que são groove/Fotos/Prancheta 11.png' },
    { name: 'Cliente 3', logo: '/marcas que são groove/Fotos/Prancheta 12.png' },
    { name: 'Cliente 4', logo: '/marcas que são groove/Fotos/Prancheta 13.png' },
    { name: 'Cliente 5', logo: '/marcas que são groove/Fotos/Prancheta 14.png' },
    { name: 'Cliente 6', logo: '/marcas que são groove/Fotos/Prancheta 15.png' },
    { name: 'Cliente 7', logo: '/marcas que são groove/Fotos/Prancheta 16.png' },
    { name: 'Cliente 8', logo: '/marcas que são groove/Fotos/Prancheta 17.png' },
    { name: 'Cliente 9', logo: '/marcas que são groove/Fotos/Prancheta 18.png' },
    { name: 'Cliente 10', logo: '/marcas que são groove/Fotos/Prancheta 19.png' },
    { name: 'Cliente 11', logo: '/marcas que são groove/Fotos/Prancheta 20.png' }
  ];

  return (
    <section id="partners" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Marcas que são <span className="text-[#E50E0E]">Groove!</span>
        </h2>
        
        {/* Infinite scroll carousel */}
        <div className="relative">
          <div className="flex animate-scroll space-x-16 items-center">
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <div key={index} className="flex-shrink-0">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-32 w-auto object-contain hover:scale-105 transition-transform"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-32 w-auto object-contain hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 45s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Partners;