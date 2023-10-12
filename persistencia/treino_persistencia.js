const { Client } = require('pg')
const { conexao } = require('./conexao')

async function addTreino(idAluno, treino) {
    const client = new Client(conexao)
    client.connect()

    try {
        const sql = `INSERT INTO treino(obs, carga, serie, exercicio, tipo, repeticao, idAluno)
                                 VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`
        const values = [treino.obs, treino.carga, treino.serie, treino.exercicio, treino.tipo, treino.repeticao, idAluno]

        const treinos = await client.query(sql, values) 

        await client.end()
        return treinos.rows[0]
    } catch (error) { throw error }
}

module.exports = {
    addTreino
}