const clientTable = `
    CREATE TABLE IF NOT EXISTS clients (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
    );
`;

// Fazendo uma fuunção que será chamada para criar as tabelas (caso elas não existam) asssim qie começar a aplicação. A função recebe o paraâmetro connection pois fará consultas com o banco de dados:
const createTables = (connection) => {
  connection
    .query(clientTable)
    .then(() => console.log("TABELA clients - PRONTA"))
    .catch((error) => console.log("TABELA clients - ERRO:", error));
};

module.exports = { createTables };
