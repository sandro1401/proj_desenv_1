const persistencia = require('../persistencia/aluno_persistencia')
// const { validarAluno } = require('./aluno_validacao')



// Iniciando CRUD

// Create
// async function addAluno(idUsuario, aluno) {
//     console.log("Conteúdo do objeto aluno recebido:", aluno)
//     if (aluno && aluno.sexo && aluno.nome && aluno.cpf && aluno.dt_nascimento && aluno.telefone && aluno.email && aluno.status
//         && aluno.plano && idUsuario) {
//             try {
//                 const alunoAdd = await persistencia.addAluno(idUsuario, aluno)
//                 return alunoAdd
//             } catch (error) {
//                 throw error 
//             }
//         } else {
//             const erro = new Error()
//             erro.message = "Todos os campos são obrigatórios."
//             erro.status = 400
//             throw erro
//         }
// }

async function addAluno(idUsuario, aluno) {
    console.log("Conteúdo do objeto aluno recebido:", aluno)
    if (aluno && aluno.sexo && aluno.nome && aluno.cpf && aluno.dt_nascimento && aluno.telefone && aluno.email && aluno.status
        && aluno.plano && idUsuario) {
            const alunoBuscadoPorCpf = await persistencia.buscarAlunoPorCpf(aluno.cpf);
            if(!alunoBuscadoPorCpf){
            try {
                const alunoAdd = await persistencia.addAluno(idUsuario, aluno)
                return alunoAdd                    
            }catch (error) {
                throw  error
            }
        }else{
            throw { id: 402, mensagem: "Aluno já cadastrado!"}
        }
    }else {
            const erro = new Error()
            erro.message = "Todos os campos são obrigatórios."
            erro.status = 400
            throw erro
        }
}


// Read
async function buscarAluno() {
    try {
        const aluno = await persistencia.buscarAluno()

        if (aluno.length == 0) {
            const erro = new Error()
            erro.message = "Não há Alunos cadastrados."
            erro.status = 404
            throw erro
        }

        return aluno
    } catch (error) { throw error }
}

async function buscarAlunoPorNome(nome) {
    try {
        const nomeAluno = await persistencia.buscarAlunoPorNome(nome)

        if (!nomeAluno) {
            const erro = new Error()
            erro.message = "Nome não encontrado."
            erro.status = 404
            throw erro
        }

        return nomeAluno
    } catch { throw error }
}

async function buscarAlunoPorEmail(email) {
    try {
        const emailAluno = await persistencia.buscarAlunoPorEmail(email)

        if (!emailAluno) {
            const erro = new Error()
            erro.message = "Nome não encontrado."
            erro.status = 404
            throw erro
        }

        return emailAluno
    } catch { throw error }
}

async function buscarAlunoPorId(id) {
    try {
        const idAluno = await persistencia.buscarAlunoPorId(id)

        if (!idAluno) {
            const erro = new Error()
            erro.message = "Id não encontrado."
            erro.status = 404
            throw erro
        }

        return idAluno
    } catch { throw error }
}

async function buscarAlunoPorCpf(cpf) {
    try {
        const cpfAluno = await persistencia.buscarAlunoPorCpf(cpf)

        if (!cpfAluno) {
            const erro = new Error()
            erro.message = "Id não encontrado."
            erro.status = 404
            throw erro
        }

        return cpfAluno
    } catch { throw error }
}


// // Update
async function atualizarAluno(id, alunos) {
    if (alunos && alunos.sexo && alunos.nome && alunos.cpf && alunos.dt_nascimento && alunos.telefone && alunos.email &&  alunos.status && alunos.plano && alunos.idusuario) {
        const alunoAtualizado = await persistencia.atualizarAluno(id, alunos)

        if (!alunoAtualizado) {
            let erro = new Error()
            erro.message = "Aluno não encontrado."
            erro.status = 404
            throw erro
        }
        return alunoAtualizado
    } else {
        let erro = new Error()
        console.log(erro)
        erro.message = "Todos os campos são obrigatórios."
        erro.status = 400
        throw erro
    }
}


// Delete
async function deletarAluno(id) {
    
    try {
        const clienteDeletado =  await persistencia.deletarAluno(id)

        if (!clienteDeletado) {
            const erro = new Error()
            erro.message = "Aluno não encontrado"
            erro.status = 404
            throw erro
        }

        return clienteDeletado
    } catch (error) { throw error }
}

// async function deletarAluno(id) {
    
//     const alunoBuscadpPorId =await buscarAlunoPorId(id)
//     if (alunoBuscadpPorId){
//         try {
//         const clienteDeletado =  await persistencia.deletarAluno(id)

//         if (!clienteDeletado) {
//             const erro = new Error()
//             erro.message = "Aluno não encontrado"
//             erro.status = 404
//             throw erro}
//             return clienteDeletado

//         } catch (error) { throw error }
//         } else{
//             throw { id: 404, mensagem: `Aluno com ID ${id} não encontrado!` }
//            }
  
    
// }

module.exports = {
    addAluno,
    buscarAluno,
    buscarAlunoPorNome,
    buscarAlunoPorEmail,
    buscarAlunoPorId,
    buscarAlunoPorCpf,
    atualizarAluno,
    deletarAluno
    
}