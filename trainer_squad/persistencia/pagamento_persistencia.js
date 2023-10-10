const { Client } = require('pg')
const { conexao } = require('./conexao')

async function listar() {
    const cliente = new Client(conexao)
    await cliente.connect();
    const res = await cliente.query('SELECT * FROM pagamento');
    await cliente.end();
    return res.rows;
}

async function inserir(pagamento){
    const aluno = new Client(conexao)
    await aluno.connect()
    // await pagamento.connect()
    
    const cliente = new Client(conexao)
    await cliente.connect();
   
    const  res = await cliente.query('INSERT INTO pagamento(id_aluno, dt_pagamento, status, valor) VALUES ($1,$2,$3,$4) RETURNING *',
    [pagamento.aluno_id, pagamento.dt_pagamento, pagamento.status, pagamento.valor]);
    await cliente.end()
    await aluno.end()
   
    return res.rows[0];
}




module.exports = {
    listar, inserir
}