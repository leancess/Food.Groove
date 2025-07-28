import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  company: string;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    company: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  //const handleSubmit = (e: React.FormEvent) => {
  //  e.preventDefault();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.phone || !formData.email || !formData.company) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Criar mensagem para WhatsApp
    const message = `Olá! Gostaria de saber mais sobre os serviços da Groove Marketing.

*Dados do contato:*
Nome: ${formData.name}
Telefone: ${formData.phone}
Email: ${formData.email}
Empresa: ${formData.company}

Aguardo retorno para agendar uma reunião!`;

    // Número do WhatsApp da Groove (usando o número do footer)
    const whatsappNumber = '5521965971074';
    
    // Criar link do WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Enviar dados para o Google Sheets
 /*   try {
       await fetch('https://script.google.com/macros/s/AKfycbwyIkghzrL6dNk86mTlMepe_2099oGauCz0HrOk07DwQX5mFobod_iJRphMaq-jA-DYIw/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    alert('Enviado com Sucesso!');  
    } catch (error) {
    console.error('Erro ao enviar para Google Sheets:', error);
  }*/

    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwyIkghzrL6dNk86mTlMepe_2099oGauCz0HrOk07DwQX5mFobod_iJRphMaq-jA-DYIw/exec', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.result === 'success') {
        setMensagem('Dados enviados com sucesso!');
        setNome('');
        setEmail('');
      } else {
        setMensagem('Erro ao enviar dados.');
      }
    } catch (error) {
      setMensagem('Erro na requisição: ' + error.message);
    }
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Fechar popup e limpar formulário
    onClose();
    setFormData({
      name: '',
      phone: '',
      email: '',
      company: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-3xl max-w-md w-full p-8 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-xl hover:bg-gray-100"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Vamos conversar!
          </h2>
          <p className="text-gray-600">
            Preencha seus dados e vamos iniciar uma conversa no WhatsApp
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nome completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E50E0E] focus:border-transparent outline-none transition-all"
              placeholder="Seu nome completo"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E50E0E] focus:border-transparent outline-none transition-all"
              placeholder="(11) 99999-9999"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E50E0E] focus:border-transparent outline-none transition-all"
              placeholder="seu@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              Nome da empresa *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E50E0E] focus:border-transparent outline-none transition-all"
              placeholder="Nome do seu restaurante/empresa"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center mt-6 hover:scale-105 hover:shadow-lg"
          >
            <Send className="h-5 w-5 mr-2" />
            Enviar para WhatsApp
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          Ao enviar, você será redirecionado para o WhatsApp com suas informações preenchidas.
        </p>
      </div>
    </div>
  );
};

export default ContactPopup;