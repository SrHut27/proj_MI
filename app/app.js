// Importando todos os módulos pré prontos para facilitar a feitura do servidor:
const express = require("express");
const PORT = 3001;
const bodyParser = require("body-parser");
const hbs = require("express-handlebars");
const path = require("path");

// instânciando a aplicação:
const app = express();

// importando configuração do banco de dados e chamando função que cria tabelas:
const connection = require("./server/configs/database_connection");
const { createTables } = require("./server/database/tables");
connection.connect((error) => {
  if (error) throw error;
  createTables(connection);
});

// Usando módulo que permite o servidor pegar dados do frontend e armazenar em variáveis:
app.use(bodyParser.urlencoded({extended:true}))

// configurando o motor de visualização, handlebars:
app.engine(
  "html",
  hbs.engine({
    defaultLayout: "main", // definindo que o layout "pai" será o main  
    extname: "html", // definindo que os arquivos handlebar terão extensão "html"
  })
);
// definindo que nossa aplicação usará o handlebars como motor de visualização:
app.set("view engine", "html");

// definindo onde ficarão os arquivos estáticos
app.use(express.static(path.join(__dirname,"public")));

// Importando as rotas da nossa aplicação
const indexRoute = require("./server/routes/indexRoute");

// usando as rotas programadas no nosso servidor:
app.use("", indexRoute);

// Colocando a aplicação para rodar na rede local
app.listen(PORT, (error) => {
  console.log("SERVIDOR RODANDO - em http://localhost:" + PORT);
});
