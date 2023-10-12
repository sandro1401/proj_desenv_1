const persistencia = require('../persistencia/treino_persistencia')

async function addTreino(idAluno, treino) {
    if (treino && treino.carga && treino.serie && treino.exercicio && treino.tipo && treino.repeticao && idAluno) {
        try {
            const treinos = await persistencia.addTreino(idAluno, treino)
            return treinos
        } catch (error) { 
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
    addTreino
}