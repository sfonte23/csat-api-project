const axios = require('axios');
const fs = require('fs');
const { url, apiKey } = require('../config/config.js');


const url = 'y';
const apiKey = 'x';

const data = {
    "ticket_id": "",
    "phone_number": "",
    "customer_region": "",
    "customer_code": "",
    "analyst_name": "",
    "contacted_person": "",
    "subject": "",
    "response": "",
    "justification": "",
    "event_date": ""
};

axios.post(url, data, {
    headers: {
        'x-api-key': apiKey
    }
})
.then(response => {
    console.log('Resposta:', response.data);
})
.catch(error => {
    console.error('Erro:', error.response.data);
});
