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

router.get('/atendimentos/', authMiddleware(), ControllerAtendimento.FindAll)
router.get('/atendimentosself/', authMiddleware(), ControllerAtendimento.FindAllByCliente)
router.get('/atendimento/:id', authMiddleware(), ControllerAtendimento.FindOne)
router.post('/atendimento/', authMiddleware(), ControllerAtendimento.Create)
router.put('/atendimento/:id', authMiddleware(), ControllerAtendimento.Update)
router.delete('/atendimento/:id', authMiddleware(), ControllerAtendimento.Delete)

export default router