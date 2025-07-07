const RequisicaoIncorreta = require('./RequisicaoIncorreta.js');

class ErroValidacao extends RequisicaoIncorreta {
    constructor(error) {
        const mensagemErro = Object.values(error.errors)
        .map(error => error.message)
        .join("; ");
    }
};

module.exports = ErroValidacao;