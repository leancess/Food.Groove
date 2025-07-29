// Este arquivo deve ser copiado para o Google Apps Script
// Acesse: https://script.google.com/

function doPost(e) {
  try {
    // ID da sua planilha do Google Sheets
    // Substitua pelo ID da sua planilha
    const SHEET_ID = '1NC_1o16FqqOjJfXHM4z14FvVdO8hBcWySNWoXZvvPJE';
    
    // Nome da aba da planilha (padrão é "Sheet1")
    const SHEET_NAME = 'Contatos';
    
    // Abrir a planilha
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    
    // Se a aba não existir, criar uma nova
    if (!sheet) {
      const newSheet = SpreadsheetApp.openById(SHEET_ID).insertSheet(SHEET_NAME);
      // Adicionar cabeçalhos
      newSheet.getRange(1, 1, 1, 6).setValues([
        ['Timestamp', 'Nome', 'Telefone', 'Email', 'Empresa', 'Status']
      ]);
      // Formatar cabeçalhos
      newSheet.getRange(1, 1, 1, 6).setFontWeight('bold');
      newSheet.getRange(1, 1, 1, 6).setBackground('#E50E0E');
      newSheet.getRange(1, 1, 1, 6).setFontColor('white');
    }
    
    const activeSheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    
    // Extrair dados do formulário
    const nome = e.parameter.nome || '';
    const telefone = e.parameter.telefone || '';
    const email = e.parameter.email || '';
    const empresa = e.parameter.empresa || '';
    const timestamp = e.parameter.timestamp || new Date().toLocaleString('pt-BR');
    
    // Adicionar nova linha com os dados
    activeSheet.appendRow([
      timestamp,
      nome,
      telefone,
      email,
      empresa,
      'Novo Lead'
    ]);
    
    // Retornar resposta de sucesso
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Dados salvos com sucesso!'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Retornar resposta de erro
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Função para testar o script
function testFunction() {
  const testData = {
    parameter: {
      nome: 'Teste',
      telefone: '(11) 99999-9999',
      email: 'teste@email.com',
      empresa: 'Empresa Teste',
      timestamp: new Date().toLocaleString('pt-BR')
    }
  };
  
  const result = doPost(testData);
  console.log(result.getContent());
}