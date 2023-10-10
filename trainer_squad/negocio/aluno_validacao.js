 

function validarAluno(pessoa){
    return pessoa && pessoa.sexo && pessoa.nome && pessoa.cpf && pessoa.dt_nascimento && pessoa.telefone && pessoa.email &&  pessoa.status && pessoa.plano && pessoa.idusuario && 
        typeof pessoa.nome == 'string' && 
        typeof pessoa.cpf == "number" &&
        typeof pessoa.email == 'string' &&
        typeof pessoa.telefone == "number" &&
        typeof pessoa.sexo == 'string' &&
        typeof pessoa.status == 'string' &&
        typeof pessoa.plano == 'string' &&
        typeof pessoa.Iusuario == 'number'
        
}

module.exports = {
    validarAluno
}