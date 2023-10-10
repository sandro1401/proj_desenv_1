const { Client } = require('pg')
const { conexao } = require('./conexao')

// Iniciando CRUD

// Create
async function addUsuario(usuario) {
    const client = new Client(conexao)
    client.connect()

    try {
        const sql = `INSERT INTO usuario(nome, email, senha) VALUES($1, $2, $3) RETURNING *`
        const values = [usuario.nome, usuario.email, usuario.senha]
        const usuarios = await client.query(sql, values)

        await client.end()
        return usuarios.rows[0]
    } catch (error) { throw error }
}

// Read
async function buscarUsuario() {
    const client = new Client(conexao)
    client.connect()

    try {
        const sql = `SELECT * FROM usuario`
        const usuario = await client.query(sql)

        client.end()
        return usuario.rows
    } catch (error) { throw error }
}

async function buscarUsuarioPorNome(nome) {
    const client = new Client(conexao)
    client.connect()

    try {
        const sql = `SELECT * FROM usuario WHERE nome = $1`
        const values = [nome]
        const nomeUsuario = await client.query(sql, values)

        client.end()
        return nomeUsuario.rows[0]
    } catch (error) { throw error }
}

async function buscarUsuarioPorEmail(email) {
    const client = new Client(conexao)
    client.connect()

    try {
        const sql = `SELECT * FROM usuario WHERE email = $1`
        const values = [email]
        const emailUsuario = await client.query(sql, values)

        client.end()
        return emailUsuario.rows[0]
    } catch (error) { throw error }
}

async function buscarUsuarioPorId(id) {
    const client = new Client(conexao)
    client.connect()

    try {
        const sql = `SELECT * FROM usuario WHERE id = $1`
        const values = [id]
        const idUsuario = await client.query(sql, values)

        client.end()
        return idUsuario.rows[0]
    } catch (error) { throw error }
}

// Update
async function atualizarUsuario(id, usuarios) {
    const client = new Client(conexao)
    client.connect()

    try {
        const sql = `UPDATE usuario SET nome = $1, email = $2, senha = $3 WHERE id = $4 RETURNING *`
        const values = [usuarios.nome, usuarios.email, usuarios.senha, id]
        const usuarioAtualizado = await client.query(sql, values)

        client.end()
        return usuarioAtualizado.rows[0]
    } catch (error) { throw error }
}

// Update - senha
async function autalizarSenha(id, senha) {
    const client = new Client(conexao)
    client.connect()

    try {
        const sql = `UPDATE usuario SET senha = $1 WHERE id = $2 RETURNING *`
        const values = [senha, id]
        const senhaAtualizada = await client.query(sql, values)

        client.end()
        return senhaAtualizada.rows[0]
    } catch (error) { throw error }
}

// Delete
async function deletarUsuario(id) {
    const client = new Client(conexao)
    client.connect()

    try {
        const sql = `DELETE FROM usuario WHERE id = $1 RETURNING *`
        const values = [id]
        const clienteDeletado = await client.query(sql, values)

        client.end()
        return clienteDeletado.rows[0]
    } catch (error) { throw error }
}

// TREINOS

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
    addUsuario,
    buscarUsuario,
    buscarUsuarioPorNome,
    buscarUsuarioPorEmail,
    buscarUsuarioPorId,
    atualizarUsuario,
    autalizarSenha,
    deletarUsuario,
    addTreino
}