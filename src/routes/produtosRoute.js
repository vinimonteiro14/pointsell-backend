const { Router } = require('express');
const ProdutoController = require ('../controllers/ProdutoController.js');

const produtoController = new ProdutoController();

const router = Router();

router.get('/produtos', (req, res) => produtoController.getAll(req, res));
router.get('/produtos/:id', (req, res) => produtoController.getOneById(req, res));
router.post('/produtos', (req, res) => produtoController.createNew(req, res));
router.put('/produtos/:id', (req, res) => produtoController.update(req, res));
router.delete('/produtos/:id', (req, res) => produtoController.delete(req, res));

module.exports = router;



