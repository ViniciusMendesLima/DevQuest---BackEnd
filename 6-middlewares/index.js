const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(`Requisição recebida em ${new Date()}`);
  next();
});

app.get("/users", (req, res) => {
  console.log("caiu na rota de usuários");
  res.send("caiu na rota raiz")
});

// Rotas e outras configurações do aplicativo

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});
