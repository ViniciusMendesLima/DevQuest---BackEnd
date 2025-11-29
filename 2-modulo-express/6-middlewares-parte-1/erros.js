const express = require("express");
const app = express();

app.get("/", (req, res) => {
  throw new Error ('Deu ruim!')
});

app.use((err,req,res,next)=> {
    res.status(500).send("Ocorreu um erro!")
})

app.listen(3000, () => {
  console.log("Servidor iniciado na porta http://localhost:3000");
});
