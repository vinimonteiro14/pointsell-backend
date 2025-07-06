'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemDoPedido extends Model {
    static associate(models) {
      ItemDoPedido.belongsTo(models.Produto, {
        foreignKey: 'produto_id'
      });

      ItemDoPedido.belongsTo(models.Pedido, {
        foreignKey: 'pedido_id'
      });
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
    tableName: 'itemdopedidos'
  });
  return ItemDoPedido;
};