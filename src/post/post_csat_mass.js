const axios = require('axios');
const fs = require('fs');
const csv = require('csv-parser');
const { url, apiKey } = require('../config/config.js');

const url = 'x';
const apiKey = 'y';

// Função para ler o arquivo CSV e enviar os dados
const sendCSVData = () => {
    let lineCount = 0; // Contador de linha

    fs.createReadStream('csat_history_teste.csv')
        .pipe(csv({ separator: ';' })) // Definindo o separador do CSV como ;
        .on('data', (row) => {
            // Criar um objeto com os dados da linha do CSV
            let data = {
                "ticket_id": row.ticket_id,
                "phone_number": row.phone_number,
                "customer_region": row.customer_region,
                "customer_code": row.customer_code,
                "analyst_name": row.analyst_name,
                "contacted_person": row.contacted_person,
                "subject": row.subject,
                "response": row.response,
                "justification": row.justification,
                "event_date": row.event_date
            };

            // Enviar a requisição para o endpoint após 1 segundo
            setTimeout(() => {
                axios.post(url, data, {
                    headers: {
                        'x-api-key': apiKey
                    }
                })
                .then(response => {
                    lineCount++; // Incrementar o contador de linha
                    console.log('Linha', lineCount, 'enviada com sucesso',response.data);
                })
                .catch(error => {
                    lineCount++; // Incrementar o contador de linha
                    console.error(`Erro ao enviar a linha`, lineCount,' ',  error.response.data);
                    return
                });
            }, 1000); // Atraso de 1 segundo

            
        })
        .on('end', () => {
            console.log('Envio Iniciado');
        });
};

sendCSVData();
