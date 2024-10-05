const axios = require('axios');
const fs = require('fs');
const { url, apiKey } = require('../config/config.js');

const url = 'x';
const apiKey = 'y';

// Carregar o conteúdo do CSV
const csvContent = fs.readFileSync('csat_to_update.csv', 'utf8');

// Separar as linhas do CSV em um array
const lines = csvContent.split('\n');

// Loop para atualizar cada ID
for (const line of lines) {
    const idToUpdate = parseInt(line.trim());
    if (!isNaN(idToUpdate)) {
        axios.patch(url + idToUpdate,
            { 
                "response": "Ruim"
            },
            {
                headers: {
                    'x-api-key': apiKey,
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
                console.log('Linha atualizada com sucesso');
            })
            .catch(error => {
                console.error('Erro ao atualizar linha:', error.response.data);
            });
    }
}
