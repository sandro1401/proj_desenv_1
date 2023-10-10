const express = require('express')
const controller = require('../controller/personal_controller')

const router = express.Router()

router.post('/', controller.addUsuario)
router.post('/:id', controller.addTreino)
router.get('/users', controller.buscarUsuario)
router.get('/nome/:nome', controller.buscarUsuarioPorNome)
router.get('/email/:email', controller.buscarUsuarioPorEmail)
router.get('/:id', controller.buscarUsuarioPorId)
router.put('/:id', controller.atualizarUsuario)
router.put('/:id/senha', controller.autalizarSenha)
router.delete('/:id', controller.deletarUsuario)

module.exports = router