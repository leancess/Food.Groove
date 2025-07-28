import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-black shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img 
              src="/marcas que são groove/Fotos/logo/logo.groovepng.png" 
              alt="Groove Logo" 
              style={{ height: '80px' }}
              className="w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-white hover:text-[#E50E0E] transition-colors px-4 py-2 rounded-lg hover:bg-gray-800">Serviços</a>
            <a href="#testimonials" className="text-white hover:text-[#E50E0E] transition-colors px-4 py-2 rounded-lg hover:bg-gray-800">Depoimentos</a>
            <a href="#results" className="text-white hover:text-[#E50E0E] transition-colors px-4 py-2 rounded-lg hover:bg-gray-800">Resultados</a>
            <a href="#contact" className="text-white hover:text-[#E50E0E] transition-colors px-4 py-2 rounded-lg hover:bg-gray-800">Contato</a>
          </nav>
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors">
            <Menu className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;