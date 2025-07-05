const express = require('express');
const categorias = require ('./categoriasRoute.js');
const produtos = require ('./produtosRoute.js');
const pedidos = require ('./pedidosRoute.js');

module.exports = app => {
    app.use(
        express.json(),
        categorias,
        produtos,
        pedidos,
    );
};