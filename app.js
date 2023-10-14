const express = require('express')
const rotaPersonal = require('./rota/personal_rota')
const rotaTreino = require('./rota/treino_rota')
const rotaAvaliacao = require('./rota/avaliacao_rota')

const app = express()
const port = 5000

app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, PUT, PATCH, GET, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', '*');
  
    next();
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/personal", rotaPersonal);
app.use("/api/treino", rotaTreino);
app.use("/api/avaliacao", rotaAvaliacao);

app.listen(port, () => {
    console.log(`Trainer Squad rodando na porta ${port}`)
})