const express = require('express')
const rotaAluno = require('./rota/aluno_rota')
const rotaPagamento = require('./rota/pagamento_rota')
const app = express()
const port = 5000

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/aluno", rotaAluno);
app.use("/api/pagamento", rotaPagamento);
app.listen(port, () => {
    console.log(`Trainer Squad rodando na porta ${port}`)
})