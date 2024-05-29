const connection = require("../configs/database_connection");

// fazendo oo primeiro controle da rota "/" da nossa aplicação, que servirá a página index:
const indexPage = (req, res) => {
  res.render("index"); //usando o método do express de "renderizar templates"
};

// Exportando os controles para serem servidos nas rota:
module.exports = { indexPage };
