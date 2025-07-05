const { Router } = require('express');
const PedidoController = require ('../controllers/PedidoController.js');

const pedidoController = new PedidoController();

const router = Router();


module.exports = router;