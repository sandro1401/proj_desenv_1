const express = require('express')
const controller = require('../controller/aluno_controller')

const router = express.Router()


// router.post('/:id', controller.addPagamento)
router.post('/aluno/:id', controller.addAluno)
router.get('/users', controller.buscarAluno)
router.get('/nome/:nome', controller.buscarAlunoPorNome)
router.get('/email/:email', controller.buscarAlunoPorEmail)
router.get('/:id', controller.buscarAlunoPorId)
router.put('/:id', controller.atualizarAluno)

router.delete('/:id', controller.deletarAluno)

module.exports = router