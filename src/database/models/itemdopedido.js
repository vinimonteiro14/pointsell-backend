'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemDoPedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ItemDoPedido.init({
    pedido_id: DataTypes.INTEGER,
    produto_id: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER,
    preco_unitario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ItemDoPedido',
    tableName: 'itemsdopedido'
  });
  return ItemDoPedido;
};