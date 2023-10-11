const negocio = require('../negocio/pagamento_negocio')

// Iniciando CRUD

// Create



// PAGAMENTO

async function addPagamento(req, res) {
    const idAluno = req.params.id
    const pagamento = req.body

    try {
        const pagamentos = await negocio.addPagamento(idAluno, pagamento)
        console.log("Dados do pagamento:", pagamento)
        res.status(201).json(pagamentos)
    } catch (error) {
        console.error("Erro ao adicionar pagamento:", error)
        if (error.status) {
            res.status(error.status).json(error)
        } else {
            res.status(500).json({message: "Erro interno!"})
        }
    }
}

async function buscarPagamento(req, res) {
    const pagamento = req.body

    try {
        const pagamentos = await negocio.buscarPagamento(pagamento)
        res.status(200).json(pagamentos)
    } catch (error) {
        if (error.status) {
            res.status(error.status).json(error)
        } else {
            res.status(500).json({message: "Erro interno!"})
        }
    }
}

module.exports = {
    
    addPagamento,
    buscarPagamento
 
   
}