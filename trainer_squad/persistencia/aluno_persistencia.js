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

// Update - senha
// async function autalizarSenha(id, senha) {
//     const client = new Client(conexao)
//     client.connect()

//     try {
//         const sql = `UPDATE Aluno SET senha = $1 WHERE id = $2 RETURNING *`
//         const values = [senha, id]
//         const senhaAtualizada = await client.query(sql, values)

//         client.end()
//         return senhaAtualizada.rows[0]
//     } catch (error) { throw error }
// }

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

// PAGAMENTOS

// async function addPagamento(idAluno, pagamento) {
//     const client = new Client(conexao)
//     client.connect()

//     try {
//         const sql = `INSERT INTO pagamento(id_aluno, dt_pagamento, status, valor) 
//                     VALUES ($1,$2,$3,$4) RETURNING *`
//         const values = [idAluno, pagamento.dt_pagamento, pagamento.status, pagamento.valor]

//         const treinos = await client.query(sql, values) 

//         await client.end()
//         return pagamento.rows[0]
//     } catch (error) { throw error }
// }

module.exports = {
    addAluno,
    buscarAluno,
    buscarAlunoPorNome,
    buscarAlunoPorEmail,
    buscarAlunoPorId,
    atualizarAluno,
    
    deletarAluno,
   
}




// const { Client } = require('pg')
// const { conexao } = require('./conexao')

// async function listar() {
//     const aluno = new Client(conexao)

//     await aluno.connect()

//     const res = await aluno.query('SELECT * FROM aluno')
//     await aluno.end()
//     return res.rows;
// }

// // async function inserir(pessoa){
// //     const aluno = new Client(conexao)
// //     const pagamento = new Client(conexao)
    
// //     await aluno.connect()
// //     await pagamento.connect()
// //     try{
// //         await aluno.query('BEGIN');
// //         const res = await aluno.query('INSERT INTO aluno(sexo, nome, cpf, dt_nascimento, telefone, email, status, plano, idusuario, idpagamento) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *', 
// //             [pessoa.sexo, pessoa.nome, pessoa.cpf, pessoa.dt_nascimento, pessoa.telefone, pessoa.email,  pessoa.status, pessoa.plano, pessoa.idusuario, pessoa.idpagamento]);
// //         await pagamento.query('INSERT INTO pagamento(id_aluno, dt_pagamento, status, valor) VALUES($1, $2, $3, $4) RETURNING *',
// //         [pagamento.id_aluno, pagamento.dt_pagamento, pagamento.status, pagamento.valor]);
// //         await aluno.query('COMMIT');
// //         await aluno.end()
// //         await pagamento.end()
// //         return res.rows[0];
// //     }catch{
// //         await aluno.query('ROLLBACK');
// //     }
    
// // }
// // 
// // async function inserir(pessoa) {
// //     const aluno = new Client(conexao);
// //     const pagamento = new Client(conexao);
// //     // const pagamento = new Client(conexao);

// //     await aluno.connect();
// //     await pagamento.connect();

// //     try {
// //         await aluno.query('BEGIN');
// //         // Inserir informações do aluno
// //         const alunoQuery = await aluno.query('INSERT INTO aluno(sexo, nome, cpf, dt_nascimento, telefone, email, status, plano, idusuario) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
// //             [pessoa.sexo, pessoa.nome, pessoa.cpf, pessoa.dt_nascimento, pessoa.telefone, pessoa.email, pessoa.status, pessoa.plano, pessoa.idusuario],
// //             // await pagamento.query('INSERT INTO pagamento(id_aluno, dt_pagamento, status, valor) VALUES($1, $2, $3, $4) RETURNING *',
// //             //     [pagamento.id_aluno, pagamento.dt_pagamento, pagamento.status, pagamento.valor])
// //             );
// //         //      // Inserir informações de pagamento relacionadas ao aluno
// //         const pagamentoQuery = await pagamento.query(
// //             'INSERT INTO pagamento(id_aluno, dt_pagamento, status, valor) VALUES($1, $2, $3, $4) RETURNING *',
// //             [pagamento.id_aluno, pagamento.dt_pagamento, pagamento.status, pagamento.valor]
// //         );
// //         await aluno.query('COMMIT');
// //         await pagamento.end();
// //         await aluno.end();
// //         // Retornar o resultado da inserção do aluno
// //         return alunoQuery.rows[0];
// //     } catch (error) {
// //         await aluno.query('ROLLBACK');
// //         console.error('Erro durante a inserção:', error);
// //         throw error; // Re-throw the error for higher-level handling, if needed
// //     }
// // }


// async function inserir(pessoa) {
//     const aluno = new Client(conexao);
//     const pagamento = new Client(conexao);
//     // const pagamento = new Client(conexao);
//     try {await aluno.connect();
//         await aluno.query('BEGIN');
//         // Inserir informações do aluno
//         const alunoQuery = await aluno.query('INSERT INTO aluno(sexo, nome, cpf, dt_nascimento, telefone, email, status, plano, idusuario) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
//             [pessoa.sexo, pessoa.nome, pessoa.cpf, pessoa.dt_nascimento, pessoa.telefone, pessoa.email, pessoa.status, pessoa.plano, pessoa.idusuario])
//         await aluno.query('COMMIT');
        
//         try{ 
//             await pagamento.connect();
           
//             // const aluno_id = await aluno.query('select id from aluno ORDER BY id DESC LIMIT 1')
//             // console.log(aluno_id)
//             await pagamento.query('INSERT INTO pagamento(id_aluno, dt_pagamento, status, valor) VALUES($1, $2, $3, $4) RETURNING *',
//                 [pagamento.id_aluno, pagamento.dt_pagamento, pagamento.status, pagamento.valor]);
//             }catch (error) {
//                 console.error('Erro durante a inserção:', error);
//                 throw error; // Re-throw the error for higher-level handling, if needed
//             }
//         await aluno.end();
//         // await aluno.query('ROLLBACK');
//         return alunoQuery.rows[0];
//     }catch (error) {
//         console.error('Erro durante a inserção:', error);
//         throw error; // Re-throw the error for higher-level handling, if needed
//     }
// }

// async function buscarPorId(id) {
//     const aluno = new Client(conexao)

//     await aluno.connect()
  
//     const res = await aluno.query('SELECT * FROM aluno WHERE id = $1',[id]);
//     await aluno.end();
//     return res.rows[0];
// }

// async function buscarPorNome(nome) {
//     const aluno = new Client(conexao)
//     await aluno.connect();
//     const res = await aluno.query('SELECT * FROM aluno WHERE NOME LIKE $1',['%' + nome + '%']);
//     await aluno.end();
//     return res.rows;
// }
// async function buscarPortelefone(telefone){
//     const aluno = new Client(conexao)
//     await aluno.connect()

//     const res = await aluno.query('SELECT * FROM aluno where telefone = $1', [telefone])

//     await aluno.end()
//     return res.rows[0];
// }

// async function buscarPorCpf(cpf){
//     const aluno = new Client(conexao)
//     await aluno.connect()

//     const res = await aluno.query('SELECT * FROM aluno where cpf = $1', [cpf])

//     await aluno.end()
//     return res.rows[0];
// }

// async function buscarPorEmail(email) {
//     const aluno = new Client(conexao)
//     await aluno.connect();
//     const res = await aluno.query('SELECT * FROM aluno WHERE email LIKE $1',['%' + email + '%']);
//     await aluno.end();
//     return res.rows[0];
// }
// async function atualizar(id, pessoa) {
//     const aluno = new Client(conexao)

//     await aluno.connect()

//     const res = await aluno.query('UPDATE aluno SET nome = $1, cpf = $2, email = $3, telefone = $4, dta_nascimento = $5, sexo = $6, avaliacao_fisica = $7 WHERE id_aluno = $8 RETURNING *', 
//     [pessoa.nome, pessoa.cpf, pessoa.email, pessoa.telefone, pessoa.dta_nascimento, pessoa.sexo, pessoa.avaliacao_fisica, id]);
//     await aluno.end()
//     return res.rows[0]
// }

// async function deletar(id) {
//     const aluno = new Client(conexao)

//     await aluno.connect()

//     const res = await aluno.query('DELETE FROM aluno WHERE id_aluno = $1 RETURNING *', 
//     [id]);
//     await aluno.end()
//     return res.rows[0]
// }




// module.exports = {
//     listar, inserir, buscarPorId, buscarPorNome, buscarPortelefone, buscarPorEmail, atualizar, deletar, buscarPorCpf
// }
