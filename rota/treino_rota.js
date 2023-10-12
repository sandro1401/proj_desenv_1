const express = require('express')
const controller = require('../controller/treino_controller')

const router = express.Router()

router.post('/:id', controller.addTreino)

module.exports = router