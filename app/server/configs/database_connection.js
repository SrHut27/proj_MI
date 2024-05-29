// Importando módulo necessário para utilizar PostgreSQL na aplicação:
const { Client } = require("pg");

// Importando configurações do dotenv para importar informações sigilosas
require("dotenv").config();

// Criando função que conecta ao banco de dados informado:
const connection = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// Exportando as configurações de coonexão para usar em consultas e conectar a aplicação:
module.exports = connection;
