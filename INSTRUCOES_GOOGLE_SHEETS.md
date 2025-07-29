# Instruções para Configurar Google Sheets

## Passo 1: Criar a Planilha do Google Sheets

1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha
3. Nomeie a planilha como "Contatos Groove Marketing"
4. Copie o ID da planilha da URL (a parte entre `/d/` e `/edit`)
   - Exemplo: `https://docs.google.com/spreadsheets/d/1ABC123DEF456/edit`
   - O ID seria: `1ABC123DEF456`

## Passo 2: Configurar Google Apps Script

1. Acesse [Google Apps Script](https://script.google.com)
2. Clique em "Novo projeto"
3. Cole o código do arquivo `google-apps-script.js`
4. Substitua `SEU_SHEET_ID_AQUI` pelo ID da sua planilha
5. Salve o projeto com um nome como "Groove Marketing Form Handler"

## Passo 3: Implantar como Web App

1. No Google Apps Script, clique em "Implantar" > "Nova implantação"
2. Escolha o tipo "Aplicativo da web"
3. Configure:
   - **Executar como**: Eu (seu email)
   - **Quem tem acesso**: Qualquer pessoa
4. Clique em "Implantar"
5. Copie a URL do Web App gerada

## Passo 4: Atualizar o Código

1. No arquivo `src/utils/googleSheets.ts`
2. Substitua `YOUR_SCRIPT_ID` pela URL completa do Web App
3. A URL deve ficar assim: `https://script.google.com/macros/s/ABC123.../exec`

## Passo 5: Testar

1. Preencha o formulário no site
2. Verifique se os dados aparecem na planilha
3. Verifique se o WhatsApp ainda funciona normalmente

## Estrutura da Planilha

A planilha terá as seguintes colunas:
- **Timestamp**: Data e hora do envio
- **Nome**: Nome completo do contato
- **Telefone**: Número de telefone
- **Email**: Endereço de email
- **Empresa**: Nome da empresa/restaurante
- **Status**: Status do lead (padrão: "Novo Lead")

## Permissões

Certifique-se de que:
- A planilha está compartilhada com o email usado no Google Apps Script
- O Google Apps Script tem permissão para acessar o Google Sheets
- O Web App está configurado para aceitar requisições de qualquer pessoa

## Solução de Problemas

Se os dados não estiverem sendo salvos:
1. Verifique se o ID da planilha está correto
2. Verifique se a URL do Web App está correta
3. Verifique as permissões da planilha
4. Teste o script diretamente no Google Apps Script usando a função `testFunction()`