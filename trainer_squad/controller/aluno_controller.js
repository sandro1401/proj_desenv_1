const negocio = require('../negocio/aluno_negocio')

// Iniciando CRUD

// Create

async function addAluno(req, res) {
    const idUsuario = req.params.id
    const aluno = req.body

    try {
        const alunoAdd = await negocio.addAluno(idUsuario, aluno)
        res.status(201).json(alunoAdd)
    } catch (error) {
        console.error("Erro ao adicionar Aluno:", error)
        if (error.status) {
            res.status(error.status).json(error)
        } else {
            res.status(500).json({message: "Erro interno!"})
        }
    }
}
// Read
async function buscarAluno(req, res) {
    const aluno = req.body

    try {
        const alunos = await negocio.buscarAluno(aluno)
        res.status(200).json(alunos)
    } catch (error) {
        if (error.status) {
            res.status(error.status).json(error)
        } else {
            res.status(500).json({message: "Erro interno!"})
        }
    }
}

async function buscarAlunoPorNome(req, res) {
    const nome = req.params.nome

    try {
        const nomeAluno = await negocio.buscarAlunoPorNome(nome)
        res.status(200).json(nomeAluno)
    } catch (error) {
        if (error.status) {
            res.status(error.status).json(error)
        } else {
            res.status(500).json({message: "Erro interno!"})
        }
    }
}

async function buscarAlunoPorEmail(req, res) {
    const email = req.params.email

    try {
        const emailAluno = await negocio.buscarAlunoPorEmail(email)
        res.status(200).json(emailAluno)
    } catch (error) {
        if (error.status) {
            res.status(error.status).json(error)
        } else {
            res.status(500).json({message: "Erro interno!"})
        }
    }
}

async function buscarAlunoPorId(req, res) {
    const id = req.params.id

    try {
        const idAluno = await negocio.buscarAlunoPorId(id)
        res.status(200).json(idAluno)
    } catch (error) {
        if (error.status) {
            res.status(error.status).json(error)
        } else {
            res.status(500).json({message: "Erro interno!"}) // verificar
        }
    }
}

// Update
async function atualizarAluno(req, res) {
    const id = req.params.id
    const aluno = req.body

    try {
        const alunoAtualizado = await negocio.atualizarAluno(id, aluno)
        res.status(200).json(alunoAtualizado)
    } catch (error) {
        if (error.status) {
            res.status(error.status).json(error)
        } else {
            res.status(500).json({message: "Erro interno!"})
        }
    }
}

// Update - senha
// async function autalizarSenha(req, res) {
//     const id = req.params.id
//     const senha = req.body

//     try {
//         const senhaAtualizada = await negocio.autalizarSenha(id, senha)
//         res.status(200).json(senhaAtualizada)
//     } catch (error) {
//         if (error.status) {
//             res.status(error.status).json(error)
//         } else {
//             res.status(500).json({message: "Erro interno!"})
//         }
//     }
// }

// Delete
async function deletarAluno(req, res) {
    const id = req.params.id

    try {
        const alunoDeletado = await negocio.deletarAluno(id)
        res.status(200).json(alunoDeletado)
    } catch (error) {
        if (error.status) {
            res.status(error.status).json(error)
        } else {
            res.status(500).json({message: "Erro interno!"})
        }
    }
}

// PAGAMENTO

// async function addPagamento(req, res) {
//     const idAluno = req.params.id
//     const pagamento = req.body

//     try {
//         const pagamentos = await negocio.addPagamento(idAluno, pagamento)
//         console.log("Dados do pagamento:", pagamento)
//         res.status(201).json(pagamentos)
//     } catch (error) {
//         console.error("Erro ao adicionar pagamento:", error)
//         if (error.status) {
//             res.status(error.status).json(error)
//         } else {
//             res.status(500).json({message: "Erro interno!"})
//         }
//     }
// }

module.exports = {
    addAluno,
    buscarAluno,
    buscarAlunoPorNome,
    buscarAlunoPorEmail,
    buscarAlunoPorId,
    atualizarAluno,
    // addPagamento,
    deletarAluno
   
}