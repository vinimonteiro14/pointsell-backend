'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    static associate(models) {
      Produto.belongsTo(models.Categoria, {
        foreignKey: 'categoria_id'
      });
      
      Produto.belongsToMany(models.Pedido, {
        through: models.ItemDoPedido,
        foreignKey: 'produto_id',
        otherKey: 'pedido_id'
      });
    }
  }
  Produto.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    preco: DataTypes.INTEGER,
    url_foto: DataTypes.STRING,
    categoria_id: DataTypes.INTEGER,
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