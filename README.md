# CSAT API Project

Este projeto contém scripts em JavaScript para manipulação de dados de CSAT via API REST. Os scripts permitem operações de POST, UPDATE e DELETE.

## Estrutura do Repositório

- `src/`: Contém todos os scripts e dados.
  - `delete/`: Scripts para deletar entradas de CSAT.
  - `update/`: Scripts para atualizar entradas de CSAT.
  - `post/`: Scripts para adicionar novas entradas de CSAT.
  - `config/`: Contém o arquivo de configuração com a URL e chave da API.
  - `csv/`: Contém arquivos CSV utilizados para operações.

## Como Usar

1. Clone o repositório.
2. Instale as dependências necessárias:
   ```bash
   npm install axios csv-parser

3. Atualize o arquivo config.js com sua URL e chave da API.
4. Execute os scripts conforme necessário, por exemplo:
    ```bash
    node src/delete/delete_mass.js