 

function validarPagamento(pagamento){
    return pagamento && pagamento.dt_pagamento && pagamento.status && pagamento.valor &&
        typeof pagamento.dt_pagamento == 'date' && 
        typeof pagamento.status == "string" &&
        typeof pagamento.valor == 'number' 
       
}

module.exports = {
    validarPagamento
}