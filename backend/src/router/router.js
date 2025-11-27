import express from 'express'
import ControllerCliente from '../controller/clientes.js'
import authMiddleware from '../middleware/auth.js'
import ControllerAtendimento from '../controller/atendimentos.js'

const router = express.Router()

router.post('/login', ControllerCliente.Login)

router.get('/clientes/', authMiddleware(), ControllerCliente.FindAll)
router.get('/cliente/:id', authMiddleware(), ControllerCliente.FindOne)
router.post('/cliente/', ControllerCliente.Create)
router.put('/cliente/:id', authMiddleware(), ControllerCliente.Update)
router.delete('/cliente/:id', authMiddleware(), ControllerCliente.Delete)

router.get('/atendimentos/', ControllerAtendimento.FindAll)
router.get('/atendimento/:id', ControllerAtendimento.FindOne)
router.post('/atendimento/:id', ControllerAtendimento.Create)
router.put('/atendimento/:id', ControllerAtendimento.Update)
router.delete('/atendimento/:id', ControllerAtendimento.Delete)

export default router