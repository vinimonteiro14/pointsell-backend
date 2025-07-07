const Naoencontrado = require ('../erros/NaoEncontrado.js');

function manipulador404 (req, res, next) {
    const error404 = new Naoencontrado();
    next(error404);
}

module.exports = manipulador404;