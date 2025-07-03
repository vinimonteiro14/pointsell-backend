'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Produto.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    preco: DataTypes.INTEGER,
    url_foto: DataTypes.STRING,
    categoria: DataTypes.INTEGER,
    promocao: DataTypes.BOOLEAN,
    menu_do_dia: DataTypes.BOOLEAN,
    mais_pedidos: DataTypes.BOOLEAN,
    novidade: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Produto',
    tableName: 'produtos',
  });
  return Produto;
};