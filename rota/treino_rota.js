const express = require('express')
const controller = require('../controller/treino_controller')

const router = express.Router()

router.post('/:id', controller.addTreino)
router.get('/', controller.buscarTreino)
router.get('/:id', controller.buscarTreinoAluno)
router.get('/tipo/:tipo', controller.buscarTreinoTipo)
router.put('/:id', controller.atualizarTreino)
router.delete('/:id', controller.deletarTreino)

module.exports = router