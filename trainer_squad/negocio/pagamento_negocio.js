const pagamentoPersistencia = require('../persistencia/pagamento_persistencia')
const alunoPersistencia = require('../persistencia/aluno_persistencia')
const { validarPagamento } = require('./pagamento_validacao')


// FUNCIONANDO!
async function listar() {
    const pagamentoListados = await pagamentoPersistencia.listar();
    if (pagamentoListados) {
        return pagamentoListados;
    }    
    else {
        throw { id: 500, mensagem: "Lista de pagamentos vazia!" };
    }
}
// FUNCIONANDO!!!
// async function inserir(pagamento) {
//     if(pagamento && pagamento.id_aluno && pagamento.dt_pagamento && pagamento.status && pagamento.valor) {
//         const alunoBuscadoPorId = await alunoPersistencia.buscarPorId(id);
//         if(!alunoBuscadoPorId) {
//             const pagamentoInserido = await pagamentoPersistencia.inserir(pagamento);
//             return pagamentoInserido;
//         }else{throw { id: 402, mensagem: "Aluno já cadastrado!"}}
        
//     }else {throw { id: 400, mensagem: "Faltam parâmetros no pagamento!"};}
// }
async function inserir(pagamento) {
        if(pagamento && pagamento.id_aluno && pagamento.dt_pagamento && pagamento.status && pagamento.valor) {
            const alunoBuscadoPorId = await alunoPersistencia.buscarPorId(pagamento.id_aluno);
            if(!alunoBuscadoPorId) {
                const pagamentoInserido = await pagamentoPersistencia.inserir(pagamento);
                return pagamentoInserido;
            }else{throw { id: 402, mensagem: "Aluno já cadastrado!"}}
            
        }else {throw { id: 400, mensagem: "Faltam parâmetros no pagamento!"};}
    }

module.exports = {
    listar, inserir,
}