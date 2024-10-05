const axios = require('axios');
const fs = require('fs');
const { url, apiKey } = require('../config/config.js');


const url = '';
const apiKey = '';
const idToDelete = 1; // Substitua pelo ID da entrada que deseja deletar

axios.delete(url+idToDelete, {
    headers: {
        'x-api-key': apiKey
    }
}
)
.then(response => {
    console.log('Linha deletada:', response.data);
})
.catch(error => {
    console.error('Erro ao deletar entrada:', error.response.data);
});
