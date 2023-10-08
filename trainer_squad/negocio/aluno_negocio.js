const alunoPersistencia = require('../persistencia/aluno_persistencia')
const { validarAluno } = require('./aluno_validacao')


// FUNCIONANDO!
async function listar() {
    const alunosListados = await alunoPersistencia.listar();
    if (alunosListados) {
        return alunosListados;
    }    
    else {
        throw { id: 500, mensagem: "Lista de alunos vazia!" };
    }
}
// FUNCIONANDO!!!
async function inserir(pessoa) {
    if(pessoa && pessoa.sexo && pessoa.nome && pessoa.cpf && pessoa.dt_nascimento && pessoa.telefone && pessoa.email && pessoa.status && pessoa.plano && pessoa.idusuario && pessoa.idpagamento) {
        const alunoBuscadoPorCpf = await alunoPersistencia.buscarPorCpf(pessoa.cpf);
        if(!alunoBuscadoPorCpf) {
            const alunoInserido = await alunoPersistencia.inserir(pessoa);
            return alunoInserido;
        }
        else{throw { id: 402, mensagem: "Aluno já cadastrado!"}}
        
    }else {throw { id: 400, mensagem: "Faltam parâmetros!"};}
}

// FUNCIONANDO!
async function buscarPorId(id) {
    const alunoBuscadoPorId = await alunoPersistencia.buscarPorId(id);
    if(!alunoBuscadoPorId) {
        throw { id: 404, mensagem: `aluno com ID ${id} não encontrado!` };
    }else{
        return alunoBuscadoPorId;     
    }
}

// FUNCIONANDO!
async function buscarPorNome(nome){
    const alunoBuscadoPorNome = await alunoPersistencia.buscarPorNome(nome);
    if(!alunoBuscadoPorNome) {
        throw { id: 404, mensagem: `Nenhum Aluno com Nome ${nome} encontrado!` };
    }else{
        return alunoBuscadoPorNome;
    }
}
// FUNCIONANDO!
async function buscarPorTelefone(telefone) {
    const alunoBuscadoPortelefone = await alunoPersistencia.buscarPortelefone(telefone)
    if(alunoBuscadoPortelefone){
        return alunoBuscadoPortelefone;
    }
    else{
        throw { id: 404, mensagem: `aluno com telefone ${telefone} não encontrado!` };
    }
}

// FUNCIONANDO!
async function buscarPorCpf(cpf) {
    const alunoBuscadoPorCpf = await alunoPersistencia.buscarPorCpf(cpf)
    if(alunoBuscadoPorCpf){
        return alunoBuscadoPorCpf;
    }
    else{
        throw { id: 404, mensagem: `aluno com CPF ${cpf} não encontrado!` };
    }
}

// FUNCIONANDO!
async function buscarPorEmail(email) {
    const alunoBuscadoPorEmail = await alunoPersistencia.buscarPorEmail(email)
    if(alunoBuscadoPorEmail){
        return alunoBuscadoPorEmail;
    }
    else{
        throw { id: 404, mensagem: `aluno com Email ${email} não encontrado!` };
    }
}


// FUNCIONANDO!
async function atualizar(id, pessoa){
    if(validarAluno(pessoa)) {
        const alunoAtualizar = await buscarPorId(id)
        if(alunoAtualizar) {
            return await alunoPersistencia.atualizar(id, pessoa);
        }
        else{
            throw { id: 404, mensagem: "aluno não encontrado!" }
        }
    }
    else {
        throw {id: 400, mensagem: "Parâmetro(s) inválido(s)!" };
    }
}

// FUNCIONANDO!
async function deletar(id){
    const alunoDeletar = await buscarPorId(id)
    if(alunoDeletar){
        return await alunoPersistencia.deletar(id);
    }
    else{
        throw { id: 404, mensagem: `Aluno com Id ${id} não encontrado!` }
    }
}


module.exports = {
    inserir, buscarPorTelefone, listar, deletar, buscarPorId, atualizar, buscarPorNome, buscarPorCpf, buscarPorEmail
}