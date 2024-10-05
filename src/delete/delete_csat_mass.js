const axios = require('axios');
const fs = require('fs');
const { url, apiKey } = require('../config/config.js');


const url = 'x';
const apiKey = 'y';

// Carregar o conteúdo do CSV
const csvContent = fs.readFileSync('csat_to_delete.csv', 'utf8');

// Separar as linhas do CSV em um array
const lines = csvContent.split('\n');

// Loop para deletar cada ID
for (const line of lines) {
    const idToDelete = parseInt(line.trim());
    if (!isNaN(idToDelete)) {
        axios.delete(url + idToDelete, {
                headers: {
                    'x-api-key': apiKey
                }
            })
            .then(response => {
                console.log('Linha do id: ',idToDelete, ' deletada', response.data);
            })
            .catch(error => {
                console.error('Erro ao deletar entrada:',idToDelete,' ', error.response.data);
            });
    }
}
