import React from 'react';
import { Star, MessageCircle } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dudu',
      role: 'CEO da Silva Nutrition',
      content: 'Fala, galera da GROOVE! Queria agradecer de verdade pela parceria da sua agência nesse periodo em que tivemos juntos! De qualidade de material não existe melhor no mercado! É sempre um prazer! Sucesso sempre — e seguimos juntos! 👊🏼🧡',
      rating: 5,
      avatar: '/Fotos/PHOTO-2024-09-16-22-00-06.jpg'
    },
    {
      name: 'Thiago Nasser',
      role: 'Chef de cozinha e dono de restaurantes na Gigoia',
      content: 'Material muito bom, o profissionalismo fez a diferença. Nosso material teve um engajamento absurdo graças a esses caras. Obrigado galera da Groove! Vocês são brabos.',
      rating: 5,
      avatar: '/Fotos/image.png'
    },
    {
      name: 'Weverton',
      role: 'Dono dos restaurantes - Boteco Seu Osmar / Tróia / Camarote Lounge',
      content: 'Bom dia! Passando aqui para parabenizar a todos pelos materiais que estamos utilizando e a didática de postagens. Está refletindo muito bem o nosso conceito e faturamento! Obrigado pelo empenho e dedicação de todos♥️',
      rating: 5,
      avatar: '/Fotos/PHOTO-2025-02-04-11-14-40.jpg'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Star className="h-6 w-6 text-[#E50E0E] mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Quem confia indica a <span className="text-[#E50E0E]">Groove!</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600">
            Veja o que nossos clientes falam sobre os resultados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-2xl mr-4 object-cover"
                  style={{
                    objectPosition: index === 0 ? 'center 20%' : 'center center'
                  }}
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;