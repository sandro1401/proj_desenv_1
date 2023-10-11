const { Client } = require('pg')
const { conexao } = require('./conexao')

// Iniciando CRUD

// Create


// PAGAMENTOS

async function addPagamento(idAluno, pagamento) {
    const client = new Client(conexao)
    client.connect()

    try {
        const sql = `INSERT INTO pagamento(id_aluno, dt_pagamento, status, valor) 
                    VALUES ($1,$2,$3,$4) RETURNING *`
        const values = [idAluno, pagamento.dt_pagamento, pagamento.status, pagamento.valor]

        const treinos = await client.query(sql, values) 

        await client.end()
        return pagamento.rows[0]
    } catch (error) { throw error }
}

// Read
async function buscarPagamento() {
    const client = new Client(conexao)
    client.connect()

    try {
        const sql = `SELECT * FROM pagamento`
        const Pagamento = await client.query(sql)

        client.end()
        return Pagamento.rows
    } catch (error) { throw error }
}


module.exports = {
  
    addPagamento,
    buscarPagamento

}

