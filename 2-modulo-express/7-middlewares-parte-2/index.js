const express = require("express");
const app = express();
var cookieParser = require('cookie-parser')

app.use(cookieParser())


app.post('/cookies', (req, res) => {
   res.cookie('nome', 'Vinicius').send('cookies definidos');
});

app.get('/cookies', (req, res) => {
    console.log(req.cookies);

    res.send('pegando os cokies')
})

app.listen(3000, () => {
  console.log("Servidor iniciado na porta http://localhost:3000");
});
