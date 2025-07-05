const { Router } = require('express');
const CategoriaController = require ('../controllers/CategoriaController.js');

const categoriaController = new CategoriaController();

const router = Router();


module.exports = router;