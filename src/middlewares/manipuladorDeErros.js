const { ValidationError, UniqueConstraintError } = require ('sequelize');
const ErroBase = require ('../erros/ErroBase.js');
const RequisicaoIncorreta = require ('../erros/RequisicaoIncorreta.js');
const ErroValidacao = require ('../erros/ErroValidacao.js');

function manipuladorDeErros (error, req, res, next) {
    console.log(error);

    if (error instanceof ValidationError || error instanceof UniqueConstraintError) {
        new ErroValidacao(error).enviarResposta(res);
    } else if (error instanceof ErroBase) {
        error.enviarResposta(res);
    } else {
        new ErroBase().enviarResposta(res);
    }
};

module.exports = manipuladorDeErros;