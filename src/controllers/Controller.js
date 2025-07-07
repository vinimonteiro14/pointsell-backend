const Naoencontrado = require ('../erros/NaoEncontrado.js');

class Controller {
    constructor(entidadeService) {
        this.entidadeService = entidadeService;
    }

    async getAll(req, res, next) {
        try {
            const listaDeRegistros = await this.entidadeService.pegaTodosOsRegistros();
            return res.status(200).json(listaDeRegistros);
        } catch (error) {
            next(error);
        }
    }

    async getOneById(req,res, next) {
        const { id } = req.params;
        try {
            const umRegistro = await this.entidadeService.pegaUmRegistroPorId(Number(id));

            if(umRegistro !== null) {
                return res.status(200).json(umRegistro);
            } else {
                next(new Naoencontrado('Id não localizado'));
            }
        } catch (error) {
            next(error);
        }
    }

    async createNew (req, res, next) {
        const dadosparaCriacao = req.body;
        try {
            const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosparaCriacao);
            return res.status(200).json(novoRegistroCriado);
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        const { id } = req.params;
        const dadosAtualizados = req.body;
        try {
            const isUpdated = await this.entidadeService.atualizaRegistro(dadosAtualizados, where);
            if (isUpdated !== null) {
                return res.status(200).json({mensagem: 'Atualizado com sucesso.'});
            } else {
                next(new Naoencontrado('Id não localizado'));
            }
        } catch (error) {
            next(error);
        }
    }

    async delete (req, res, next) {
        const { id } = req.params;
        try {
           const umRegistro = await this.entidadeService.excluiRegistro(Number(id));
            if( umRegistro !== null) {
                return res.status(200).json({mensagem: `id ${id} deletado com sucesso`});
            } else {
                next(new Naoencontrado('Id não localizado'));
            }
        } catch (error) {
            next(error);
        }
    }
};

module.exports = Controller;