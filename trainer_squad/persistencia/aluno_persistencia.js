const { Client } = require('pg')
const { conexao } = require('./conexao')

async function listar() {
    const aluno = new Client(conexao)

    await aluno.connect()

    const res = await aluno.query('SELECT * FROM aluno')
    await aluno.end()
    return res.rows;
}

async function inserir(pessoa){
    const aluno = new Client(conexao)
    
    await aluno.connect()

    const res = await aluno.query('INSERT INTO aluno(nome, cpf, email, telefone, dta_nascimento, sexo, avaliacao_fisica) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *', 
    [pessoa.nome, pessoa.cpf, pessoa.email, pessoa.telefone, pessoa.dta_nascimento, pessoa.sexo, pessoa.avaliacao_fisica]);
    await aluno.end()
    return res.rows[0]
}

async function buscarPorId(id_aluno) {
    const aluno = new Client(conexao)

    await aluno.connect()

    const res = await aluno.query('SELECT * FROM aluno WHERE id_aluno = $1',
    [id_aluno]);
    await aluno.end();
    return res.rows[0];
}

async function buscarPorNome(nome) {
    const aluno = new Client(conexao)
    await aluno.connect();
    const res = await aluno.query('SELECT * FROM aluno WHERE NOME LIKE $1',['%' + nome + '%']);
    await aluno.end();
    return res.rows;
}
async function buscarPortelefone(telefone){
    const aluno = new Client(conexao)
    await aluno.connect()

    const res = await aluno.query('SELECT * FROM aluno where telefone = $1', [telefone])

    await aluno.end()
    return res.rows[0];
}

async function buscarPorCpf(cpf){
    const aluno = new Client(conexao)
    await aluno.connect()

    const res = await aluno.query('SELECT * FROM aluno where cpf = $1', [cpf])

    await aluno.end()
    return res.rows[0];
}

async function buscarPorEmail(email) {
    const aluno = new Client(conexao)
    await aluno.connect();
    const res = await aluno.query('SELECT * FROM aluno WHERE email LIKE $1',['%' + email + '%']);
    await aluno.end();
    return res.rows[0];
}
async function atualizar(id_aluno, pessoa) {
    const aluno = new Client(conexao)

    await aluno.connect()

    const res = await aluno.query('UPDATE aluno SET nome = $1, cpf = $2, email = $3, telefone = $4, dta_nascimento = $5, sexo = $6, avaliacao_fisica = $7 WHERE id_aluno = $8 RETURNING *', 
    [pessoa.nome, pessoa.cpf, pessoa.email, pessoa.telefone, pessoa.dta_nascimento, pessoa.sexo, pessoa.avaliacao_fisica, id_aluno]);
    await aluno.end()
    return res.rows[0]
}

async function deletar(id_aluno) {
    const aluno = new Client(conexao)

    await aluno.connect()

    const res = await aluno.query('DELETE FROM aluno WHERE id_aluno = $1 RETURNING *', 
    [id_aluno]);
    await aluno.end()
    return res.rows[0]
}




module.exports = {
    listar, inserir, buscarPorId, buscarPorNome, buscarPortelefone, buscarPorEmail, atualizar, deletar, buscarPorCpf
}