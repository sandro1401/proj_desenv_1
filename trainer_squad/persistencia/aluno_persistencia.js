const { Client } = require('pg')
const { conexao } = require('./conexao')

async function listar() {
    const aluno = new Client(conexao)

    await aluno.connect()

    const res = await aluno.query('SELECT * FROM aluno')
    await aluno.end()
    return res.rows;
}

// async function inserir(pessoa){
//     const aluno = new Client(conexao)
//     const pagamento = new Client(conexao)
    
//     await aluno.connect()
//     await pagamento.connect()
//     try{
//         await aluno.query('BEGIN');
//         const res = await aluno.query('INSERT INTO aluno(sexo, nome, cpf, dt_nascimento, telefone, email, status, plano, idusuario, idpagamento) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *', 
//             [pessoa.sexo, pessoa.nome, pessoa.cpf, pessoa.dt_nascimento, pessoa.telefone, pessoa.email,  pessoa.status, pessoa.plano, pessoa.idusuario, pessoa.idpagamento]);
//         await pagamento.query('INSERT INTO pagamento(id_aluno, dt_pagamento, status, valor) VALUES($1, $2, $3, $4) RETURNING *',
//         [pagamento.id_aluno, pagamento.dt_pagamento, pagamento.status, pagamento.valor]);
//         await aluno.query('COMMIT');
//         await aluno.end()
//         await pagamento.end()
//         return res.rows[0];
//     }catch{
//         await aluno.query('ROLLBACK');
//     }
    
// }
// 
async function inserir(pessoa) {
    const aluno = new Client(conexao);
    const pagamento = new Client(conexao);
    // const pagamento = new Client(conexao);

    await aluno.connect();
    await pagamento.connect();

    try {
        await aluno.query('BEGIN');

        // Inserir informações do aluno
        const alunoQuery = await aluno.query(
            'INSERT INTO aluno(sexo, nome, cpf, dt_nascimento, telefone, email, status, plano, idusuario) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
            [pessoa.sexo, pessoa.nome, pessoa.cpf, pessoa.dt_nascimento, pessoa.telefone, pessoa.email, pessoa.status, pessoa.plano, pessoa.idusuario]
        );

             // Inserir informações de pagamento relacionadas ao aluno
        const pagamentoQuery = await pagamento.query(
            'INSERT INTO pagamento(id_aluno, dt_pagamento, status, valor) VALUES($1, $2, $3, $4) RETURNING *',
            [pagamento.id_aluno, pagamento.dt_pagamento, pagamento.status, pagamento.valor]
        );

        await aluno.query('COMMIT');

        await pagamento.end();
        await aluno.end();

        // Retornar o resultado da inserção do aluno
        return alunoQuery.rows[0];
    } catch (error) {
        await aluno.query('ROLLBACK');
        console.error('Erro durante a inserção:', error);
        throw error; // Re-throw the error for higher-level handling, if needed
    }
}


async function buscarPorId(id) {
    const aluno = new Client(conexao)

    await aluno.connect()
  
    const res = await aluno.query('SELECT * FROM aluno WHERE id = $1',[id]);
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
async function atualizar(id, pessoa) {
    const aluno = new Client(conexao)

    await aluno.connect()

    const res = await aluno.query('UPDATE aluno SET nome = $1, cpf = $2, email = $3, telefone = $4, dta_nascimento = $5, sexo = $6, avaliacao_fisica = $7 WHERE id_aluno = $8 RETURNING *', 
    [pessoa.nome, pessoa.cpf, pessoa.email, pessoa.telefone, pessoa.dta_nascimento, pessoa.sexo, pessoa.avaliacao_fisica, id]);
    await aluno.end()
    return res.rows[0]
}

async function deletar(id) {
    const aluno = new Client(conexao)

    await aluno.connect()

    const res = await aluno.query('DELETE FROM aluno WHERE id_aluno = $1 RETURNING *', 
    [id]);
    await aluno.end()
    return res.rows[0]
}




module.exports = {
    listar, inserir, buscarPorId, buscarPorNome, buscarPortelefone, buscarPorEmail, atualizar, deletar, buscarPorCpf
}