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

module.exports = {
    addTreino
}