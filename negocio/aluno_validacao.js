 

function validarAluno(pessoa){
    return pessoa && pessoa.nome && pessoa.cpf && pessoa.email && pessoa.telefone && pessoa.sexo && pessoa.avaliacao_fisica &&
        typeof pessoa.nome == 'string' && 
        typeof pessoa.cpf == "number" &&
        typeof pessoa.email == 'string' &&
        typeof pessoa.telefone == "number" &&
           
        typeof pessoa.sexo == 'string' &&
        typeof pessoa.avaliacao_fisica == 'string'
}

module.exports = {
    validarAluno
}