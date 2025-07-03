'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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