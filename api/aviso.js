import fs from "fs";
import path from "path";

const filePath = path.resolve("mensagens.json");

export default (req, res) => {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Erro ao ler o arquivo de mensagens." });
    }

    const mensagens = JSON.parse(data);
    res.json(mensagens); // Retorna a mensagem atual
  });
};
