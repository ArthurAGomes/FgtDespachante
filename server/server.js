// server/server.js
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

// Usuário e senha de autenticação
const usuario_valido = "admin";
const senha_valida = "senha123";

// Caminho para o arquivo JSON
const json_file = path.join(__dirname, "mensagens.json");

// Middleware para aceitar JSON e URL-encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para o login
app.post("/api/login", (req, res) => {
  const { usuario, senha } = req.body;

  // Verifica as credenciais
  if (usuario === usuario_valido && senha === senha_valida) {
    res.json({ success: true });
  } else {
    res
      .status(401)
      .json({ success: false, message: "Usuário ou senha inválidos." });
  }
});

// Rota para obter a mensagem atual do JSON
app.get("/api/mensagem", (req, res) => {
  fs.readFile(json_file, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Erro ao ler o arquivo JSON.");
    }

    const json_data = JSON.parse(data);
    res.json(json_data);
  });
});

// Rota para atualizar a mensagem
app.post("/api/alterar-mensagem", (req, res) => {
  const { title, mensagem } = req.body;

  // Atualiza o arquivo JSON com a nova mensagem
  const dados = { title, mensagem };
  fs.writeFile(json_file, JSON.stringify(dados, null, 2), (err) => {
    if (err) {
      return res.status(500).send("Erro ao salvar a mensagem.");
    }
    res.send("Mensagem alterada com sucesso!");
  });
});

// Inicia o servidor Express
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
