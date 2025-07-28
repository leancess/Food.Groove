import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img 
              src="/marcas que são groove/Fotos/logo/logo.groovepng.png" 
              alt="Groove Logo" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-300 mb-6 max-w-md">
              Especialistas em marketing digital para restaurantes, bares, cafés e pizzarias. 
              Transformamos sua presença online em resultados reais.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/pensegroove/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-2xl hover:bg-[#E50E0E] transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors px-2 py-1 rounded-lg hover:bg-gray-800">Marketing Digital</a></li>
              <li><a href="#" className="hover:text-white transition-colors px-2 py-1 rounded-lg hover:bg-gray-800">Tráfego Pago</a></li>
              <li><a href="#" className="hover:text-white transition-colors px-2 py-1 rounded-lg hover:bg-gray-800">Social Media</a></li>
              <li><a href="#" className="hover:text-white transition-colors px-2 py-1 rounded-lg hover:bg-gray-800">Identidade Visual</a></li>
              <li><a href="#" className="hover:text-white transition-colors px-2 py-1 rounded-lg hover:bg-gray-800">Consultoria Food</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-[#E50E0E]" />
                <a href="tel:+5521965971074" className="hover:text-white transition-colors">
                  (21) 9 6597-1074
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-[#E50E0E]" />
                <a href="mailto:contato@pensegroove.com" className="hover:text-white transition-colors">
                  contato@pensegroove.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-[#E50E0E]" />
                <span>Rio de Janeiro, RJ - Barra da Tijuca</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Groove Marketing. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;