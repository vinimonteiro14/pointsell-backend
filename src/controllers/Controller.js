class Controller {
    constructor(entidadeService) {
        this.entidadeService = entidadeService;
    }

    async getAll(req, res) {
        try {
            const listaDeRegistros = await this.entidadeService.pegaTodosOsRegistros();
            return res.status(200).json(listaDeRegistros);
        } catch (error) {
            return res.status(500).json({error: error.message});
        }
    }

    async getOneById(req,res) {
        const { id } = req.params;
        try {
            const umRegistro = await this.entidadeService.pegaUmRegistroPorId(Number(id));
            return res.status(200).json(umRegistro);
        } catch (error) {
            
        }
    }

    async createNew (req, res) {
        const dadosparaCriacao = req.body;
        try {
            const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosparaCriacao);
            return res.status(200).json(novoRegistroCriado);
        } catch (error) {
            return res.status(500).json({error: error.message});
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const dadosAtualizados = req.body;
        try {
            const isUpdated = await this.entidadeService.atualizaRegistro(dadosAtualizados, where);
            if (!isUpdated) {
                return res.status(400).json({mensagem: 'Registro não foi atualizado.'});
            }
            return res.status(200).json({mensagem: 'Atualizado com sucesso.'});
        } catch (error) {
            
        }
    }

    async delete (req, res) {
        const { id } = req.params;
        try {
            await this.entidadeService.excluiRegistro(Number(id));
            return res.status(200).json({mensagem: `id ${id} deletado com sucesso`});
        } catch (error) {
            
        }
    }
};

module.exports = Controller;