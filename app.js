const express = require('express')
const rotaPersonal = require('./rota/personal_rota')

const app = express()
const port = 5000

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/personal", rotaPersonal);

app.listen(port, () => {
    console.log(`Trainer Squad rodando na porta ${port}`)
})