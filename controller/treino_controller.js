const negocio = require('../negocio/treino_negocio')

async function addTreino(req, res) {
    const idAluno = req.params.id
    const treino = req.body

    try {
        const treinos = await negocio.addTreino(idAluno, treino)
        res.status(201).json(treinos)
    } catch (error) {
        if (error.status) {
            res.status(error.status).json(error)
        } else {
            res.status(500).json({message: "Erro interno!"})
        }
    }
}

async function buscarTreino(req, res) {
    const treinos = req.body

    try {
        const treino = await negocio.buscarTreino(treinos)
        res.status(200).json(treino)
    } catch (error) {
        if (error.status) {
            res.status(error.status).json(error)
        } else {
            res.status(500).json({message: "Erro interno!"})
        }
    }
}

async function buscarTreinoAluno(req, res) {
    const idAluno = req.params.id

    try {
        const treinos = await negocio.buscarTreinoAluno(idAluno)
        res.status(200).json(treinos)
    } catch (error) {
        if (error.status) {
            res.status(error.status).json(error)
        } else {
            res.status(500).json({message: "Erro interno!"})
        }
    }
}

async function buscarTreinoTipo(req, res) {
    const tipoTreino = req.params.tipo

    try {
        const tipo = await negocio.buscarTreinoTipo(tipoTreino)
        res.status(200).json(tipo)
    } catch (error) {
        if (error.status) {
            res.status(error.status).json(error)
        } else {
            res.status(500).json({message: "Erro interno!"})
        }
    }
}

module.exports = {
    addTreino,
    buscarTreino,
    buscarTreinoAluno,
    buscarTreinoTipo
}