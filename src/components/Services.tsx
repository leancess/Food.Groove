import React from 'react';
import { Eye, TrendingUp, Users, Camera, Utensils, Smartphone, MessageCircle, BarChart3 } from 'lucide-react';

interface ServicesProps {
  onOpenPopup: () => void;
}

const Services: React.FC<ServicesProps> = ({ onOpenPopup }) => {
  const services = [
    { icon: Eye, title: 'IDENTIDADE VISUAL', description: 'Design profissional para sua marca' },
    { icon: TrendingUp, title: 'TRÁFEGO PAGO', description: 'Campanhas que convertem em vendas' },
    { icon: Users, title: 'SOCIAL MEDIA', description: 'Presença forte nas redes sociais' },
    { icon: Camera, title: 'FOTOS', description: 'Photography profissional de pratos' },
    { icon: Utensils, title: 'CONSULTORIA FOOD', description: 'Estratégias específicas para food' },
    { icon: Smartphone, title: 'APP RESERVAS', description: 'Sistema de reservas online' },
    { icon: MessageCircle, title: 'DELIVERY', description: 'Otimização para delivery' },
    { icon: BarChart3, title: 'MKT de INFLUÊNCIA', description: 'Parcerias estratégicas' }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Seu restaurante faz parte das redes sociais mas{' '}
            <span className="text-[#E50E0E]">ninguém sabe disso?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Resolvemos isso com uma estratégia completa de marketing digital
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="text-center p-6 rounded-2xl hover:bg-gray-900 transition-all duration-300 group border-2 border-[#E50E0E] hover:scale-105 hover:shadow-lg"
              >
                <div className="bg-[#E50E0E]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#E50E0E]/20 transition-colors">
                  <IconComponent className="h-8 w-8 text-[#E50E0E]" />
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm md:text-base">{service.title}</h3>
                <p className="text-gray-300 text-xs md:text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={onOpenPopup}
            className="bg-green-400 hover:bg-green-500 text-black font-semibold px-8 py-4 rounded-2xl transition-all duration-300 inline-block hover:scale-105 hover:shadow-lg"
          >
            Quero marcar uma reunião
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;