const { Client } = require('pg')
const { conexao } = require('./conexao')

// Iniciando CRUD

// Create
async function addAluno(idUsuario, aluno) {
    let resAluno
    const client = new Client(conexao)
    client.connect()

    try {
        await client.query('BEGIN')

        const sql = `INSERT INTO aluno(sexo, nome, cpf, dt_nascimento, telefone, email, status, plano, idUsuario)
                                VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id`
        const values = [aluno.sexo, aluno.nome, aluno.cpf, aluno.dt_nascimento, aluno.telefone, aluno.email, aluno.status, 
                        aluno.plano, idUsuario]       
        resAluno = await client.query(sql, values)                         

        const sqlPag = `INSERT INTO pagamento(id_aluno, dt_pagamento, status, valor) VALUES($1, $2, $3, $4) RETURNING *`
        const valuesPag = [resAluno.rows[0].id, aluno.pagamento.dt_pagamento, aluno.pagamento.status, aluno.pagamento.valor]
        const pag = await client.query(sqlPag, valuesPag)

        await client.query('COMMIT')

        return { aluno: resAluno.rows[0], pagamento: pag.rows[0] };
    } catch (error) {
        await client.query('ROLLBACK'); 
        throw error;
    } finally {
        client.end() 
    }
}

// Read
async function buscarAluno() {
    const client = new Client(conexao)
    client.connect()

    try {
        const sql = `SELECT * FROM aluno`
        const Aluno = await client.query(sql)

        client.end()
        return Aluno.rows
    } catch (error) { throw error }
}

async function buscarAlunoPorNome(nome) {
    const client = new Client(conexao)
    client.connect()

    try {
        const sql = `SELECT * FROM aluno WHERE nome = $1`
        const values = [nome]
        const nomeAluno = await client.query(sql, values)

        client.end()
        return nomeAluno.rows[0]
    } catch (error) { throw error }
}

async function buscarAlunoPorEmail(email) {
    const client = new Client(conexao)
    client.connect()

    try {
        const sql = `SELECT * FROM aluno WHERE email = $1`
        const values = [email]
        const emailAluno = await client.query(sql, values)

        client.end()
        return emailAluno.rows[0]
    } catch (error) { throw error }
}

async function buscarAlunoPorId(id) {
    const client = new Client(conexao)
    client.connect()

    try {
        const sql = `SELECT * FROM aluno WHERE id = $1`
        const values = [id]
        const idAluno = await client.query(sql, values)

        client.end()
        return idAluno.rows[0]
    } catch (error) { throw error }
}

// Update
async function atualizarAluno(id, alunos) {
    const client = new Client(conexao)
    client.connect()

    try {
        const sql = `UPDATE aluno SET sexo = $1, nome, = $2 cpf = $3, dt_nascimento = $4, telefone = $5, email = $6, status = $7, plano = $8, idusuario = $9 WHERE id = $10 RETURNING *`
        const values = [alunos.sexo, alunos.nome, alunos.cpf, alunos.dt_nascimento, alunos.telefone, alunos.email,  alunos.status, alunos.plano, alunos.idusuario, id]
        const AlunoAtualizado = await client.query(sql, values)

        client.end()
        return AlunoAtualizado.rows[0]
    } catch (error) { throw error }
}



// Delete
async function deletarAluno(id) {
    const client = new Client(conexao)
    client.connect()

    try {
        const sql = `DELETE FROM aluno WHERE id = $1 RETURNING *`
        const values = [id]
        const clienteDeletado = await client.query(sql, values)

        client.end()
        return clienteDeletado.rows[0]
    } catch (error) { throw error }
}


module.exports = {
    addAluno,
    buscarAluno,
    buscarAlunoPorNome,
    buscarAlunoPorEmail,
    buscarAlunoPorId,
    atualizarAluno,
    
    deletarAluno,
   
}

