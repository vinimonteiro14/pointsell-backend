'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    static associate(models) {
      Pedido.belongsToMany(models.Produto, {
        through: models.ItemDoPedido,
        foreignKey: 'pedido_id',
        otherKey: 'produto_id'
      });
    }
  }
  Pedido.init({
    valor_total: DataTypes.INTEGER,
    status: DataTypes.STRING,
    data_criacao: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Pedido',
    tableName: 'pedidos',
  });
  return Pedido;
};