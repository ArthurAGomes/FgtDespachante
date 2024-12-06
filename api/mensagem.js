import express from "express";
import fs from "fs";
import cors from "cors";
import path from "path";

const filePath = path.resolve("mensagens.json");

const app = express();
app.use(cors());
app.use(express.json());

// Simulação de autenticação simples (usuário hardcoded)
const CREDENTIALS = {
  username: "admin",
  password: "senha123",
};

// Simula armazenamento de sessão (em produção, use cookies ou tokens JWT)
let loggedIn = false;

// Middleware de proteção para rotas privadas
function authMiddleware(req, res, next) {
  if (!loggedIn) {
    return res
      .status(401)
      .json({ error: "Acesso negado. Faça login primeiro." });
  }
  next();
}

// Rota para login
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (username === CREDENTIALS.username && password === CREDENTIALS.password) {
    loggedIn = true;
    res.json({ success: true, message: "Login bem-sucedido." });
  } else {
    res.status(401).json({ error: "Usuário ou senha inválidos." });
  }
});

// Rota para logout
app.post("/api/logout", (req, res) => {
  loggedIn = false;
  res.json({ success: true, message: "Logout realizado com sucesso." });
});

// Rota pública para obter a mensagem (qualquer usuário pode acessar)
app.get("/aviso", (req, res) => {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Erro ao ler o arquivo de mensagens." });
    }

    const mensagens = JSON.parse(data);
    res.json(mensagens); // Retorna a mensagem atual
  });
});

// Rota para alterar a mensagem (rota protegida, exige login)
app.post("/api/mensagem", authMiddleware, (req, res) => {
  const { title, mensagem } = req.body;

  if (!title || !mensagem) {
    return res
      .status(400)
      .json({ error: "Título e mensagem são obrigatórios." });
  }

  const novaMensagem = { title, mensagem };

  fs.writeFile(
    filePath,
    JSON.stringify(novaMensagem, null, 2),
    "utf-8",
    (err) => {
      if (err) {
        return res.status(500).json({ error: "Erro ao salvar a mensagem." });
      }

      res.json({ success: true, message: "Mensagem alterada com sucesso!" });
    }
  );
});

// Exportando como uma função para o Vercel
export default (req, res) => {
  app(req, res);
};
