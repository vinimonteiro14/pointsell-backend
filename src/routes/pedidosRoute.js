const { Router } = require('express');
const PedidoController = require ('../controllers/PedidoController.js');
const ItemDoPedidosController = require ('../controllers/ItemDoPedidosController.js');

const pedidoController = new PedidoController();
const itemDoPedidosController = new ItemDoPedidosController();

const router = Router();

router.get('/pedidos', (req, res) => pedidoController.getAll(req, res));
router.get('/pedidos/:id', (req, res) => pedidoController.getOneById(req, res));
router.post('/pedidos', (req, res) => pedidoController.createNew(req, res));
router.put('/pedidos/:id', (req, res) => pedidoController.update(req, res));
router.delete('/pedidos/:id', (req, res) => pedidoController.delete(req, res));

router.get('/pedidos/:pedidoId/itens', (req, res) => itemDoPedidosController.getAll(req, res));
router.post('/pedidos/:pedidoId/itens', (req, res) => itemDoPedidosController.createNew(req, res));
router.put('/pedidos/:pedidoId/itens/:id', (req, res) => itemDoPedidosController.update(req, res));
router.delete('/pedidos/:pedidoId/itens/:id', (req, res) => itemDoPedidosController.delete(req, res));

module.exports = router;