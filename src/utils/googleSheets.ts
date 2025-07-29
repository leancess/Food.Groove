interface FormData {
  nome: string;
  telefone: string;
  email: string;
  empresa: string;
}

export const sendToGoogleSheets = async (data: FormData): Promise<boolean> => {
  try {
    // URL do Google Apps Script Web App
    // Você precisará substituir esta URL pela URL do seu Google Apps Script
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzdTbdFUbcXkAy95RvsrMlzfvU8skiFlQGU811I1RvNnh2ycTkVxVzhWum9a4hXP9dXYA/exec';
    
    const formData = new FormData();
    formData.append('nome', data.nome);
    formData.append('telefone', data.telefone);
    formData.append('email', data.email);
    formData.append('empresa', data.empresa);
    formData.append('timestamp', new Date().toLocaleString('pt-BR'));

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: formData,
      mode: 'no-cors' // Necessário para Google Apps Script
    });

    // Com mode: 'no-cors', não podemos verificar o status da resposta
    // Assumimos sucesso se não houver erro
    return true;
  } catch (error) {
    console.error('Erro ao enviar dados para Google Sheets:', error);
    return false;
  }
};