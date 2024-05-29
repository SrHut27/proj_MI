// importando o método "router" do express que permite fazer rotas externas à aplicação, depois importá-las
const express = require("express");
const router = express.Router();

// Importando os controles que serão servidos quando o usuário acessar a rota:
const { indexPage } = require("../controllers/indexControll");

// Fazendo as rotas:

router.get("/", (req, res) => {
  indexPage(req, res);
});

// Exportando as rotas para chama-las na aplicação:
module.exports = router;
