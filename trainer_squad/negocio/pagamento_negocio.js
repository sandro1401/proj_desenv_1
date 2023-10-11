const persistencia = require('../persistencia/pagamento_persistencia')
// const { validarAluno } = require('./aluno_validacao')



// Iniciando CRUD

// Create

// PAGAMENTO

async function addPagamento(idAluno, pagamento) {
    if (pagamento && idAluno && pagamento.dt_pagamento && pagamento.status && pagamento.valor) {
        try {
            const pagamentos = await persistencia.addPagamento(idAluno, pagamento)
            console.log("Pagamento adicionado com sucesso:", pagamentos)
            return pagamentos
        } catch (error) { 
            console.error("Erro ao adicionar pagamento:", error) 
            throw error 
        }
    } else {
        const erro = new Error()
        erro.message = "Todos os campos são obrigatórios."
        erro.status = 400
        throw erro
    }
}

module.exports = {
    
    addPagamento
   
    
}