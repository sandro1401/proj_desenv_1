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
    if(pessoa && pessoa.nome && pessoa.cpf && pessoa.email && pessoa.telefone && pessoa.dta_nascimento && pessoa.sexo && pessoa.avaliacao_fisica) {
        const alunoBuscadoPorCpf = await alunoPersistencia.buscarPorCpf(pessoa.cpf);
        if(!alunoBuscadoPorCpf) {
            const alunoInserido = await alunoPersistencia.inserir(pessoa);
            return alunoInserido;
        }
        else{
            throw { id: 402, mensagem: "Aluno já cadastrado!"}
        }
    }
    else {
        throw { id: 400, mensagem: "Faltam parâmetros!"};
    }
}

// FUNCIONANDO!
async function buscarPorId(id_aluno) {
    const alunoBuscadoPorId = await alunoPersistencia.buscarPorId(id_aluno);
    if(!alunoBuscadoPorId) {
        throw { id: 404, mensagem: `aluno com ID ${id_aluno} não encontrado!` };
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
async function atualizar(id_aluno, pessoa){
    if(validarAluno(pessoa)) {
        const alunoAtualizar = await buscarPorId(id_aluno)
        if(alunoAtualizar) {
            return await alunoPersistencia.atualizar(id_aluno, pessoa);
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
async function deletar(id_aluno){
    const alunoDeletar = await buscarPorId(id_aluno)
    if(alunoDeletar){
        return await alunoPersistencia.deletar(id_aluno);
    }
    else{
        throw { id: 404, mensagem: `Aluno com Id ${id_aluno} não encontrado!` }
    }
}


module.exports = {
    inserir, buscarPorTelefone, listar, deletar, buscarPorId, atualizar, buscarPorNome, buscarPorCpf, buscarPorEmail
}