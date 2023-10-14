const negocio = require('../negocio/avaliacao_negocio')

async function addAval(req, res) {
    const idAluno = req.params.id
    const avaliacao = req.body

    try {
        const aval = await negocio.addAval(idAluno, avaliacao)
        res.status(201).json(aval)
    } catch (error) {
        if (error.status) {
            res.status(error.status).json(error)
        } else {
            console.log(error)
            res.status(500).json({message: "Erro interno!"})
        }
    }
}

async function buscarAvaliacoes(req, res) {
    const avaliacao = req.body

    try {
        const aval = await negocio.buscarAvaliacoes(avaliacao)
        res.status(200).json(aval)
    } catch (error) {
        if (error.status) {
            res.status(error.status).json(error)
        } else {
            console.log(error)
            res.status(500).json({message: "Erro interno!"})
        }
    }
}

async function buscarAvaliacoesAluno(req, res) {
    const idAluno = req.params.id

    try {
        const avaliacao = await negocio.buscarAvaliacoesAluno(idAluno)
        res.status(200).json(avaliacao)
    } catch (error) {
        if (error.status) {
            res.status(error.status).json(error)
        } else {
            res.status(500).json({message: "Erro interno!"})
        }
    }
}

module.exports = {
    addAval,
    buscarAvaliacoes,
    buscarAvaliacoesAluno
}
