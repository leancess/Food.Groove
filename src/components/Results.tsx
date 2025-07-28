import React from 'react';
import { TrendingUp, Users, DollarSign, Heart } from 'lucide-react';

interface ResultsProps {
  onOpenPopup: () => void;
}

const Results: React.FC<ResultsProps> = ({ onOpenPopup }) => {
  const results = [
    { icon: TrendingUp, value: '300%', label: 'Aumento médio nas vendas' },
    { icon: Users, value: '+50K', label: 'Novos seguidores gerados' },
    { icon: DollarSign, value: 'R$ 2M+', label: 'Faturamento gerado' },
    { icon: Heart, value: '98%', label: 'Taxa de satisfação' }
  ];

  const galleryImages = [
    '/marcas que são groove/Fotos/©genarobraga-3576.jpg',
    '/marcas que são groove/Fotos/©genarobraga-3595.jpg',
    '/marcas que são groove/Fotos/©genarobraga-3622.jpg',
    '/marcas que são groove/Fotos/©genarobraga-3653.jpg',
    '/marcas que são groove/Fotos/©genarobraga-3718.jpg',
    '/marcas que são groove/Fotos/©genarobraga-3729.jpg',
    '/marcas que são groove/Fotos/©genarobraga-.jpg',
    '/marcas que são groove/Fotos/©genarobraga--2.jpg'
  ];

  return (
    <section id="results" className="bg-white">
      {/* Primeira parte - fundo branco */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Engajamento que converte em <span className="text-[#E50E0E]">VENDAS!</span>
            </h2>
            <p className="text-xl text-gray-600">
              Nossos resultados falam por si só
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result, index) => {
              const IconComponent = result.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-[#E50E0E]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:scale-105 transition-transform">
                    <IconComponent className="h-8 w-8 text-[#E50E0E]" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{result.value}</div>
                  <div className="text-gray-600">{result.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Segunda parte - fundo preto */}
      <div className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-[#E50E0E]">Tráfego pago</span> que funciona e traz resultados!
            </h3>
            <p className="text-gray-300 mb-8">Veja alguns dos nossos trabalhos</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={image} 
                  alt={`Trabalho Groove ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110 duration-300"
                  onError={(e) => {
                    console.log(`Erro ao carregar imagem: ${image}`);
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-medium">
              Tudo com foco no que <span className="font-bold text-[#E50E0E]">realmente importa</span>: 
              atrair clientes e aumentar seu faturamento
            </p>
            <button 
              onClick={onOpenPopup}
              className="bg-green-400 hover:bg-green-500 text-black font-semibold px-8 py-4 rounded-2xl transition-all duration-300 inline-block hover:scale-105 hover:shadow-lg"
            >
              Quero começar uma campanha
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;