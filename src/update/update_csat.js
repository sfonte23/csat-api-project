const axios = require('axios');
const fs = require('fs');
const { url, apiKey } = require('../config/config.js');


const url = 'x';
const apiKey = 'y';
const idToUpdate = 14056;

axios.patch(url + idToUpdate,
    { 
        "response": "Bom",
        "justification" :"-"
    },
    {
        headers: {
            'x-api-key': apiKey,
            'Content-Type': 'application/json'
        }
    }
)
.then(() => {
    console.log('Linha atualizada com sucesso');
})
.catch(error => {
    console.error('Erro ao atualizar linha:', error.response.data);
});