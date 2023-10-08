const pagamentoPersistencia = require('../persistencia/pagamento_persistencia')
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
async function inserir(pagamento) {
    if(pagamento && pagamento.id_aluno && dt_pagamento && pagamento.status && pagamento.valor) {
        const alunoBuscadoPorId = await alunoPersistencia.buscarPorId(id_aluno);
        if(!alunoBuscadoPorId) {
            const pagamentoInserido = await alunoPersistencia.inserir(pessoa);
            return pagamentoInserido;
        }
        else{throw { id: 402, mensagem: "Aluno já cadastrado!"}}
        
    }else {throw { id: 400, mensagem: "Faltam parâmetros!"};}
}



module.exports = {
    listar, inserir,
}